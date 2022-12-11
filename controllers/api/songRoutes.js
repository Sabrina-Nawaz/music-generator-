const router = require("express").Router();
const { Song } = require("../../models");

// GET all songs
router.get("/", async (req, res) => {
  try {
    const songData = await Song.findAll();
    res.status(200).json(songData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single song
router.get("/:id", async (req, res) => {
  try {
    const getSongId = await Song.findOne({
      where: { id: req.params.id },
    });
    if (!getSongId) {
      res.status(404).json({ message: "No song found with this id!" });
      return;
    }
    res.status(200).json(getSongId);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a song
router.post("/", async (req, res) => {
  try {
    const newSong = await Song.create(req.body);
    res.status(200).json(newSong);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a song by its 'id' value
router.delete("/:id", async (req, res) => {
  try {
    const deletedSongData = await Song.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deletedSongData) {
      res.status(404).json({ message: "No song located with this id!" });
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
