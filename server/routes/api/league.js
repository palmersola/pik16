const router = require("express").Router();
const { User, League } = require("../../models");
const {leagueUser} = require('../../models/index')

router.post("/", (req, res) => {
    if (!req.body.leagueName) {
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }

    League.create(
        {
            leagueName: req.body.leagueName
        }
    ).then(createdLeague => {
        User.findByPk(req.body.user.userId)
            .then(async existingUser => {
                if (existingUser) {
                    createdLeague.userId = existingUser.userId
                    await createdLeague.save()
                } else {
                    console.error("User not found.");
                }
            })
            .catch(error => {
                console.error(error);
            });
    })
        .catch(error => {
            console.error(error);
        });
    }
);

router.get("/", (req, res) => {
        const leagueName = req.query.leagueName;
        const condition = leagueName ? {leagueName: {[Op.like]: `%${leagueName}%`}} : null;

        League.findAll({ where: condition })
            .then(data => {res.send(data)})
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving user."
                });
            });
    }
)
router.get("/:leagueId", (req, res) => {
        const leagueId = req.params.leagueId;

        League.findByPk(leagueId)
            .then(data => {
                if (data) {res.send(data)}
                else {
                    res.status(404).send({
                        message: `Cannot find user with id=${leagueId}.`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error retrieving user with id=" + leagueId
                });
            });
    }
)

router.put("/:leagueId", (req, res) => {
        const leagueId = req.params.leagueId;

        League.update(req.body, {
            where: { userId: leagueId }
        })
            .then(num => {
                if (num === 1) {
                    res.send({message: "User was updated successfully."});
                } else {
                    res.send({message: `Cannot update user with id=${leagueId}.`});
                }
            })
            .catch(err => {
                res.status(500).send({message: "Error updating user with id=" + leagueId});
            });
    }
)

router.delete("/:leagueId", (req, res) => {
        const leagueId = req.params.leagueId;

        League.destroy({
            where: { leagueId: leagueId }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "User was deleted successfully!"
                    });
                } else {
                    res.send({
                        message: `Cannot delete user with id=${leagueId}.`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Could not delete user with id=" + leagueId
                });
            });
    }
)

router.delete("/", (req, res) => {
        League.destroy({
            where: {},
            truncate: false
        })
            .then(nums => {
                res.send({ message: `${nums} users were deleted successfully!` });
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while removing all users."
                });
            });
    }
)

router.post("/add-games/:leagueId", async (req, res) => {
    const leagueId = req.params.leagueId;
    const selectedGameIds = req.body.gameIds;

    try {
        const league = await League.findByPk(leagueId);

        if (!league) {
            return res.status(404).json({ message: `League with ID ${leagueId} not found.` });
        }

        // Assuming you have a gamesArr field in the League model
        league.gamesArr = selectedGameIds;
        await league.save();

        return res.status(200).json({ message: `Games added to league ${leagueId} successfully.` });
    } catch (error) {
        return res.status(500).json({ message: "Error adding games to league." });
    }
});


module.exports = router;