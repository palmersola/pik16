const router = require("express").Router();
const { User, League } = require("../../models");

router.post("/", (req, res) => {
        if (!req.body.leagueName) {
            res.status(400).send({message: "Content can not be empty!"});
            return;
        }

        const league = {
            leagueName: req.body.leagueName,
        };

        League.create(league).then(data => {res.send(data)})
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating new user."
                });
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

module.exports = router;