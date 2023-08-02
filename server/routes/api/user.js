const router = require("express").Router();
const { User, League, Player } = require("../../models/index");

router.post("/", (req, res) => {
    if (!req.body.userName) {
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }

    const userData = {
        userName: req.body.userName,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    };

    User.create(userData)
        .then((user) => {
            Player.create({ userId: user.userId }) // Assuming Player model has 'userId' field
                .then(player => res.send({user, player} ))
                .catch(err => {
                    console.error('Error creating player:', err);
                    res.status(500).send({ message: 'Error creating player for the user.' });
                });
        })
        .catch((err) => {
            console.error('Error creating user:', err);
            res.status(500).send({ message: 'Error creating new user.' });
        });
    }
);

router.get("/", (req, res) => {
    User.findAll({
        include: [Player], // Eager loading Player model
    })
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving user."
            });
        });
});

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