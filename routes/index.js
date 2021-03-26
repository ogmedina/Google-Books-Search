const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

//API Route
router.use("/api", apiRoutes);

//No Api routes, send to path of React app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router; 