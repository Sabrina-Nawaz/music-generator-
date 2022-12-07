const router = require("express").Router();
const { User } = require("../../models");

//CREATE a user
router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);
    res.status(200).json(tripData);
  } catch (err) {
    res.status(400).json(err);
  }
});
