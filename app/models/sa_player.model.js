module.exports = (sequelize, Sequelize) => {
    const playerFile = sequelize.define('sa_player_files', { 
        title: Sequelize.STRING,
        urlDFF: Sequelize.STRING,
        urlTXD: Sequelize.STRING,
        urlIMG: Sequelize.STRING
      }, {
         tableName: 'sa_player_files', timestamps: false
      });
  
    return playerFile;
  };