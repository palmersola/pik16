const router = require("express").Router();
const { User, League } = require("../../models");

router.post("/", (req, res) => {
    if (!req.body.userName) {
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }

    const user = {
        userName: req.body.userName,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    };

    User.create(user).then(data => {res.send(data)})
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating new user."
            });
        });
    }
);

router.get("/", (req, res) => {
    const userName = req.query.userName;
    const condition = userName ? {userName: {[Op.like]: `%${userName}%`}} : null;

    User.findAll({ where: condition })
        .then(data => {res.send(data)})
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving user."
            });
        });
    }
)
router.get("/:userId", (req, res) => {
    const userId = req.params.userId;

    User.findByPk(userId)
        .then(data => {
            if (data) {res.send(data)}
            else {
                res.status(404).send({
                    message: `Cannot find user with id=${userId}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving user with id=" + userId
            });
        });
    }
)

router.put("/:userId", (req, res) => {
    const userId = req.params.userId;

    User.update(req.body, {
        where: { userId: userId }
    })
        .then(num => {
            if (num == 1) {
                res.send({message: "User was updated successfully."});
            } else {
                res.send({message: `Cannot update user with id=${userId}.`});
            }
        })
        .catch(err => {
            res.status(500).send({message: "Error updating user with id=" + userId});
        });
    }
)

router.delete("/:userId", (req, res) => {
    const userId = req.params.userId;

    User.destroy({
        where: { userId: userId }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete user with id=${userId}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete user with id=" + userId
            });
        });
    }
)

router.delete("/", (req, res) => {
    User.destroy({
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