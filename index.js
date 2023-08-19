const initLibraries = require("./configs/libraries");
const router = require("./routes/index");
const db = require("./models/postgreSQL/connect");
const createData = require("./models/index");
const PORT = process.env.PORT || 5000;
const server = initLibraries();

db.connect();
router(server);
// createData.initAll();

server.listen(PORT, () => {
   console.log("Server run at " + PORT);
});
