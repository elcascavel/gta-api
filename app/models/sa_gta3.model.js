module.exports = (sequelize, Sequelize) => {
    const gta3File = sequelize.define('sa_gta3_files', { 
        title: Sequelize.STRING,
        urlDFF: Sequelize.STRING,
        urlTXD: Sequelize.STRING,
        urlIMG: Sequelize.STRING
      }, {
         tableName: 'sa_gta3_files', timestamps: false
      });
  
    return gta3File;
  };