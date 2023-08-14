const router = require("express").Router();
const { User, League, Player } = require("../../models");
const{userPlayer} = require('../../models/index')

router.post("/register", (req, res) => {
    if (!req.body.userName) {
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }

    User.create(
        {
            userName: req.body.userName,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            player: {}
        }, {
            include: [ userPlayer ]
        }
    )
        .then(data => {
            res.send(data)})
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating new user."
            });
        });
    }
);

router.get("/", (req, res) => {
    const userName = req.user;
    const condition = userName ? {userName: {[Op.like]: `%${userName}%`}} : null;

    User.findAll({
        where: condition,
        include: [ userPlayer ]
    })
        .then(data => {res.send(data)})
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving user."
            });
        });
    }
)

router.get('/owned/:id',  (req, res) => {
    User.findOne({where: {userId: req.params.id}})
        .then(user => {
            console.log("this one" + user)
            return user.getLeagues()
        })
        .then(data => {
            console.log(data)
            res.send(data)
        })
})

router.get('/playing/:id',  (req, res) => {
    Player.findOne({where: {userId: req.params.id}})
        .then(player => {
            console.log("this one" + player)
            return player.getLeagues()
        })
        .then(data => {
            console.log(data)
            res.send(data)
        })
})


router.post("/login", (req, res) => {
    const userName = req.body.userName;
    const password = req.body.password

    User.findOne({
        where: {
            userName: userName
        }
    }).then(user => {
        console.log("before")
        user.password === password?
            res.send(user):
            res.status(404).send({
            message: `Cannot find user with userName or password`
            });
        console.log("after")
    })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving user with userName=" + userName
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