//Setting up middleware
app.use(express.static("public"));

//Create route for the API
//Gets references for html pages
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);
app.get("/login", (req, res) =>
  res.sendFile(path.join(__dirname, "public/loginSignup.html"))
);
app.get("/homepage", (req, res) =>
  res.sendFile(path.join(__dirname, "public/homepage.html"))
);
app.get("/video", (req, res) =>
  res.sendFile(path.join(__dirname, "public/videoPage.html"))
);
app.get("/user", (req, res) =>
  res.sendFile(path.join(__dirname, "public/userMusic.html"))
);
