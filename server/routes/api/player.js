const router = require("express").Router();
const { User, Player } = require("../../models");
//
// router.post("/", (req, res) => {
//         if (!req.body.leagueName) {
//             res.status(400).send({message: "Content can not be empty!"});
//             return;
//         }
//
//         const league = {
//             leagueName: req.body.leagueName,
//         };
//
//         League.create(league).then(data => {res.send(data)})
//             .catch(err => {
//                 res.status(500).send({
//                     message: err.message || "Some error occurred while creating new user."
//                 });
//             });
//     }
// );
//
// router.get("/", (req, res) => {
//     const playerId = req.query.playerId;
//     const condition = playerId ? {playerId: {[Op.like]: `%${playerId}%`}} : null;
//
//     Player.findAll({ where: condition })
//         .then(data => {res.send(data)})
//         .catch(err => {
//             res.status(500).send({
//                 message: err.message || "Some error occurred while retrieving user."
//             });
//         });
//     }
// )
// router.get("/:leagueId", (req, res) => {
//     const playerId = req.params.playerId;
//
//     Player.findByPk(playerId)
//         .then(data => {
//             if (data) {res.send(data)}
//             else {
//                 res.status(404).send({
//                     message: `Cannot find user with id=${playerId}.`
//                 });
//             }
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Error retrieving user with id=" + playerId
//             });
//         });
//     }
// )
//
// router.put("/:leagueId", (req, res) => {
//     const playerId = req.params.playerId;
//
//     Player.update(req.body, {
//         where: { userId: playerId }
//     })
//         .then(num => {
//             if (num === 1) {
//                 res.send({message: "User was updated successfully."});
//             } else {
//                 res.send({message: `Cannot update user with id=${playerId}.`});
//             }
//         })
//         .catch(err => {
//             res.status(500).send({message: "Error updating user with id=" + playerId});
//         });
//     }
// )
//
// router.delete("/:leagueId", (req, res) => {
//     const playerId = req.params.playerId;
//
//     Player.destroy({
//         where: { playerId: playerId }
//     })
//         .then(num => {
//             if (num === 1) {
//                 res.send({
//                     message: "User was deleted successfully!"
//                 });
//             } else {
//                 res.send({
//                     message: `Cannot delete user with id=${playerId}.`
//                 });
//             }
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Could not delete user with id=" + playerId
//             });
//         });
//     }
// )
//
// router.delete("/", (req, res) => {
//     Player.destroy({
//         where: {},
//         truncate: false
//     })
//         .then(nums => {
//             res.send({ message: `${nums} users were deleted successfully!` });
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while removing all users."
//             });
//         });
//     }
// )

module.exports = router;