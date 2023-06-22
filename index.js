const initLibraries = require("./configs/libraries");
const server = initLibraries();
const router = require("./routes/index");
const db = require("./models/postgreSQL/connect");
const createData = require("./models/index");
const PORT = process.env.PORT || 5000;

db.connect();
createData.initAll();
router(server);

server.listen(PORT, () => {
   console.log("Server run at " + PORT);
});
