const db = require('../models');
const gta3File = db.sa_gta3_files;
const Op = db.Sequelize.Op;

// Retrieve all gta3 files from the database.
    exports.findAll = (req, res) => {
        const title = req.query.title;
        var condition = title ? { title: { [Op.eq]: title } } : null;
      
        gta3File.findAll({ where: condition })
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving gta3.img files."
            });
          });
    };

// Find a single gta3 file with an id
    exports.findOne = (req, res) => {
        const id = req.params.id;
      
        gta3File.findByPk(id)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message: "Error retrieving gta3.img file with id =" + id
            });
          });
      };
