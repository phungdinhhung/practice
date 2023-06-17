const initLibraries = require('./configs/libraries');
const server = initLibraries();
const router = require('./routes/index');
const db = require('./models/connect')
const PORT = process.env.PORT || 5000;

router(server);

server.listen(PORT, () => {
   console.log("Server run at " + PORT);
});