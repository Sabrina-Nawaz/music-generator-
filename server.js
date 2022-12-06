const express = require("express");
// const routes = require("./routes");
// import sequelize connection
const sequelize = require("./config/connection");
const { User, Playlist, Song } = require("./models/index.js");
const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(routes);

// app.get('*', (req, res) => {
//     console.log('hello ')
//     Song.findAll({}).then(data => {
//         res.json(data);
//     })
// })

// sync sequelize models to the database, then turn on the server
sequelize
  .sync({ force: true })
  .then(() => {
    app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.log(err);
    throw err;
  });
