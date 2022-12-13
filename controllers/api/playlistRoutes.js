const router = require("express").Router();
const { Playlist, User, Song } = require("../../models");

// GET all playlists
router.get("/:userID", async (req, res) => {
  try {
    const playlistData = await User.findAll({
      where: { id: req.params.userID },
      include: [
        {
          model: Playlist,
          include: [
            {
              model: Song,
            },
          ],
        },
      ],
    });
    res.status(200).json(playlistData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//create row for playlist
router.post("/", async (req, res) => {
  try {
    const playlistRow = await Playlist.create(req.body, {
      where: {
        id: req.params.user_id,
        id: req.params.song_id,
      },
    });
    res.status(200).json(playlistRow);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a row for playlist
router.delete("/:id", async (req, res) => {
  try {
    const deletedPlaylistRow = await Playlist.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deletedPlaylistRow) {
      res
        .status(404)
        .json({ message: "Song with this id not on the playlist!" });
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single playlist (may need to use findOne?)
// router.get("/:id", async (req, res) => {
//   try {
//     const playlistData = await Playlist.findByPk(req.params.id, {
//       // JOIN with User, using the Song through table
//       include: [{ model: User, through: Song,
//       /*as: "planned_trips"*/ }],
//     });

//     if (!playlistData) {
//       res.status(404).json({ message: "Playlist not found with this id!" });
//       return;
//     }

//     res.status(200).json(playlistData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
