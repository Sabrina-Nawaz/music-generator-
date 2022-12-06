const router = require("express").Router();
const { Song, Playlist, User } = require("../../models");

// GET all songs
router.get("/", async (req, res) => {
  try {
    const locationData = await Song.findAll();
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single song
router.get('/:id', async (req, res) => {
  try {
    const songData = await Song.findByPk(req.params.id, {
      // JOIN with Playlist, using the User through table
      include: [{ model: Playlist, through: User, as: /*'location_travellers'*/ }]
    });

    if (!songData) {
      res.status(404).json({ message: 'No song located with this id!' });
      return;
    }

    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});