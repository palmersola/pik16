const router = require("express").Router();
const { User, League, Player } = require("../../models");

router.get("/", (req, res) => {
        const playerId = req.query.playerId;
        const condition = playerId ? {playerId: {[Op.like]: `%${playerId}%`}} : null;

        User.findAll({ where: condition })
            .then(data => {res.send(data)})
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving user."
                });
            });
    }
)

router.post('/', (req, res) => {

})


module.exports = router;