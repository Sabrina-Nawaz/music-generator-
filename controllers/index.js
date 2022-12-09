/***
 * home / 
 * api  /api
 */
 const router = require("express").Router();
 const apiRoutes = require("./api");
 // import home 


 // home   "/", h); 
 router.use("/api", apiRoutes);


 module.exports = router;