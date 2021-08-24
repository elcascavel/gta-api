const express = require('express');
const cors = require('cors');

const app = express();

let corsOptions = {
    origin: "localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/sa/gta3/dff'));
app.use(express.static(__dirname + '/sa/gta3/txd'));
app.use(express.static(__dirname + '/sa/gta3/img'));

app.use(express.static(__dirname + '/sa/player/dff'));
app.use(express.static(__dirname + '/sa/player/txd'));
app.use(express.static(__dirname + '/sa/player/img'));

const db = require('./app/models/index');
db.sequelize.sync();

app.get("/", (req, res) => {
    res.json({ message: "Welcome to gta api application." });
  });

  // set port, listen for requests
require("./app/routes/file.routes")(app);
const PORT = process.env.PORT || 4560;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
  
