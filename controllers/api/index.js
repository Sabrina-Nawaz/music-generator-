const router = require("express").Router();
const userRoutes = require("./userRoutes");
const playlistRoutes = require("./playlistRoutes");
const songRoutes = require("./songRoutes");

router.use("/users", userRoutes);
router.use("/playlistRoutes", playlistRoutes);
router.use("/songRoutes", songRoutes);

module.exports = router;
