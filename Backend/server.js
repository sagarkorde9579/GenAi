// require("dotenv").config()
// const app = require("./src/app")
// const connectToDB = require("./src/config/database")

// connectToDB()

// const PORT = process.env.PORT || 3000
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`)
// })



require("dotenv").config();

// Force Google DNS servers
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const app = require("./src/app");
const connectToDB = require("./src/config/database");

// Connect to MongoDB
connectToDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});