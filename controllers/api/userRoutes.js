const router = require("express").Router();
const User = require("../../models/User");

// GET all users
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll();
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET one user
router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: "No user found with this id" });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST create a new user
router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);
    console.log({userData})
    res.status(200).json({user: userData, loggedIn:true, message: 'You are now logged in' });
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

// POST user login
router.post("/login", async (req, res) => {
  try {

    // First we find one user record with an email address that matches the one provided by the user logging in
    const userData = await User.findOne({ where: { username: req.body.username } });
   
    if ( !userData ) {
      return res.status(400)
                .json({ message: 'Email or password not found, please try again' });
    }

    // If the user does exist, we will use the checkPassword() instance method to compare the user's input to the password stored in the record
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      return res.status(400)
                .json({ message: 'Incorrect email or password, please try again' });
    }

    // If checkPassword() evaluates as true, the user will be logged in
    
    const responseData = { user: userData, loggedIn:true, message: 'You are now logged in'};

    //req.session.user = responseData;

    return res.json(responseData);

  } catch (err) {
    console.error(err);
    return res.status(400).json(err);
  }
});

// PUT update a user
router.put("/:id", async (req, res) => {
  try {
    const userData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!userData[0]) {
      res.status(404).json({ message: "No user with this id!" });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

// const router = require("express").Router();
// const { User } = require("../../models");

// //CREATE a user
// router.post("/", async (req, res) => {
//   try {
//     const userData = await User.create(req.body);
//     res.status(200).json(tripData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// module.exports = router;
