const router = require('express').Router();
const { ApiClient, GamesApi, TeamsApi } = require('cfb.js');

const defaultClient = ApiClient.instance;
const ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = "9a54H8KxvkdBqOcX7NOUXS0QD2gB0n1SZs7AZZlnZtRVTxiJDORWQxYox8bQdq8N";
ApiKeyAuth.apiKeyPrefix = "Bearer"; // Set the apiKeyPrefix here

const gamesApi = new GamesApi();
const teamsApi = new TeamsApi();
const year = 2022;
let games;
let teams;

let gamesArr = [];

const opts = {
    'week': 1,
    'conference': 'sec'
}

async function getGames(year) {
    const opts = {
        'week': 1
    }

    try {
        games = await gamesApi.getGames(year, opts);
        return games;
    } catch (error) {
        console.error('Error fetching games:', error.message);
        throw error;
    }
}

async function getTeams(year) {
    try {
        teams = await teamsApi.getTeams(year);
        return teams;
    } catch (error) {
        console.error('Error fetching teams:', error.message);
        throw error;
    }
}


function findGame(id) {
    let a = games.filter((game) => game.id === id);

    let game = a[0];
    let home = teams.filter((team) => team.id === game.homeId);
    let away = teams.filter((team) => team.id === game.awayId);

    home[0].logos = (home[0].logos === null) ?
        ["client/src/logo.svg", "client/src/logo.svg"] : home[0].logos;

    away[0].logos = (away[0].logos === null) ?
        ["client/src/logo.svg", "client/src/logo.svg"] : away[0].logos;

    let gameObj = {
        game: game,
        home: home[0],
        away: away[0]
    }

    gamesArr.push(gameObj);
}

// API routes
router.get('/games', async (req, res) => {
    try {
        const validConferences = ["Big Ten", "Pac-12", "SEC", "ACC", "Big 12"];
        await getGames(year);
        await getTeams(year);

        gamesArr = [];
        // console.log(games)
        games.forEach(game => findGame(game.id));
        const filteredGames = gamesArr.filter(gameObj => {
            const homeConference = gameObj.game.homeConference;
            const awayConference = gameObj.game.awayConference;

            return validConferences.includes(homeConference) || validConferences.includes(awayConference);
        });
        res.json(filteredGames);
    } catch (error) {
        console.error('Error fetching games:', error.message);
        res.status(500).json({ error: 'Error fetching games' });
    }
});

router.get('/', async (req, res) => {
    try {
        const a = await getGames(year);
        await getTeams(year);

        // gamesArr = [];
        // games.forEach(id => findGame(id));
        res.json(a);
    } catch (error) {
        console.error('Error fetching games:', error.message);
        res.status(500).json({ error: 'Error fetching games' });
    }
});

module.exports = router