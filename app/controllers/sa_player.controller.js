const db = require('../models');
const playerFile = db.sa_player_files;
const Op = db.Sequelize.Op;

// Retrieve all player files from the database.
    exports.findAll = (req, res) => {
        const title = req.query.title;
        var condition = title ? { title: { [Op.eq]: title } } : null;
      
        playerFile.findAll({ where: condition })
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving player.img files."
            });
          });
    };

// Find a single player.img file with an id
    exports.findOne = (req, res) => {
        const id = req.params.id;
      
        playerFile.findByPk(id)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message: "Error retrieving player.img file with id =" + id
            });
          });
      };
