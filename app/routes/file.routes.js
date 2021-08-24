module.exports = app => {
    const sa_gta3_files = require('../controllers/sa_gta3.controller.js');
    const sa_player_files = require('../controllers/sa_player.controller.js');
  
    var router = require('express').Router();

    // Retrieve all Files
    router.get('/sa/gta3', sa_gta3_files.findAll);
    router.get('/sa/player', sa_player_files.findAll);
  
    // Retrieve a single file with id
    router.get('/sa/gta3/:id', sa_gta3_files.findOne);
    router.get('/sa/player/:id', sa_player_files.findOne);
  
    app.use('/api/v1/gta', router);
  };