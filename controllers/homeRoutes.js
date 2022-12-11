const router = require("express").Router();
const path = require("path");

//Create route for the API
//Gets references for html pages
router.get("/", (req, res) => res.sendFile(path.join(__dirname, "../public/index.html")));
router.get("/login", (req, res) => res.sendFile(path.join(__dirname, "../public/loginSignup.html")));
router.get("/homepage", (req, res) => res.sendFile(path.join(__dirname, "../public/homepage.html")));
router.get("/video", (req, res) => res.sendFile(path.join(__dirname, "../public/videoPage.html")));
router.get("/user", (req, res) => res.sendFile(path.join(__dirname, "../public/userPlaylist.html")));
router.get("/music", (req, res) => res.sendFile(path.join(__dirname, "../public/meditation.html")));

module.exports = router;
