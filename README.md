<h1 align="center">
    GTA API
</h1>

This is the first API I've written to be used in conjunction with Domagoj, a Discord bot I created. You're free to use in your own projects and contribute! As a beginner, many things may have been coded poorly. You're free to contribute to the project. Below are some notes I took to better understand what the code does. Hopefully it's helpful to you as well.

<img src="https://discordapp.com/api/guilds/423230093947830282/widget.png?style=shield" alt="Discord Shield"/>

### db.config.js
In simple terms, a module is code that we group together for the purposes of sharing and reuse. Modules, therefore, allow us to break down complexity in our applications into small chunks.

Module exports are the instruction that tells Node.js which bits of code (functions, objects, strings, etc.) to “export” from a given file so other files are allowed to access the exported code.

To understand modules, we have to understand require, too. There’s no real sense in exporting functionality if we’re not consuming it elsewhere. Require is a function we can use to import other modules.

This module export contains information to login our app into the server's MySQL table, taken from a config.json file. You should set it up as such in your own projects.

### sa_gta3.model.js & sa_player.model.js

These files represents sequelize models of their respective tables in your MySQL database. Inside we define these table and its properties. We tell the name of the table directly to Sequelize with the tableName parameter. We also force sequelize to not add timestamp table fields to the table upon initialization.

### index.js

Here we import the configuration of our database, initialize sequelize with the parameters provided in the db.config.js file. We then create a module for export (db). We assign the Sequelize and sequelize variables we created above. In the end we import our file model and get it ready for export.

### file.routes.js

We create a module named app, importing our files controller and express library.

Routing refers to how an application’s endpoints (URIs) respond to client requests. Here we set up our router with two GET functions. The first one targets the base URL and calls a function to retrieve all files found in the mysql table. The second one has a router parameter that targets the id of the file.

### sa_gta3.controller.js & sa_player.controller.js

Here we import our db model and assign a few variables. We export a function that finds all files in the table by searching for the name. Our condition uses an operator to set up our condition. We then trigger the function "where" our condition (title) is met to send the data back to who's requesting it.

We specify another function to find specific files by ID.

### server.js

The file to start our API from. We import express and cors with our origin set to our website.
