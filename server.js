const http = require("http");
require("dotenv").config();

const app = require("./src/app/app");
const db = require("./src/db/db");

const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

try {
    db.sequelize.authenticate();
    console.log("Successfully connecting to the database.");
    server.listen(PORT, (err) => {
        if (!err) {
            console.log(`Server is running on ${PORT} port.`);
        } else {
            console.log("Error occures while running the server.");
            console.log(err.message);
        }
    });
} catch (err) {
    console.log("Error occures while connecting the database.");
    console.log(err.message);
}
