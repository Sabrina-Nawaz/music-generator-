const router = require("express").Router();
const { Playlist, User, Song } = require("../../models");

// GET all playlists
router.get("/:userID", async (req, res) => {
  try {
    const playlistData = await Playlist.findAll({
    
      include: [Song]
});
    res.status(200).json(playlistData);
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
