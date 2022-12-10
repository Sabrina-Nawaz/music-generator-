const router = require("express").Router();
const { Song, Playlist, User } = require("../../models");

// GET all songs
router.get("/", async (req, res) => {
  try {
    const songData = await Song.findAll({
      attributes: ["id", "song_name", "artist", "album", "song_source"],
    });
    res.status(200).json(songData);
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

    res.status(200).json(deletedSongData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
