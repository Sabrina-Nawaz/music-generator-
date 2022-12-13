const router = require("express").Router();
const path = require("path");
const { Song } = require("../models");

//Create route for the API
//Gets references for html pages
router.get("/", (req, res) => res.sendFile(path.join(__dirname, "../public/index.html")));
router.get("/login", (req, res) => res.sendFile(path.join(__dirname, "../public/loginSignup.html")));
router.get("/homepage", (req, res) => res.sendFile(path.join(__dirname, "../public/homepage.html")));
// router.get("/videoPage", (req, res) => res.sendFile(path.join(__dirname, "../public/videoPage.html")));
router.get("/user", (req, res) => res.sendFile(path.join(__dirname, "../public/userPlaylist.html")));
router.get("/meditation", (req, res) => res.sendFile(path.join(__dirname, "../public/meditation.html")));
router.get("/lofi", (req, res) => res.sendFile(path.join(__dirname, "../public/lofi.html")));
router.get("/videoPage/:id",(req, res) =>
  res.sendFile(path.join(__dirname, "../public/videoPage.html"))
);

module.exports = router;
