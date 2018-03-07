// // Import the ORM to create functions that will interact with the database.
// var orm = require("../config/orm.js");

// //code to call the ORM functions using burger specific input for the ORM.

// var burger = {
//     selectAll: function(cb) {
//       orm.selectAll("burgers", function(res) {
//         cb(res);
//       });
//     },
//     // The variables cols and vals are arrays.
//     insertOne: function(cols, vals, cb) {
//       orm.insertOne("burgers", cols, vals, function(res) {
//         cb(res);
//       });
//     },
//     updateOne: function(objColVals, condition, cb) {
//       orm.updateOne("burgers", objColVals, condition, function(res) {
//         cb(res);
//       });
//     },
//     delete: function(condition, cb) {
//       orm.delete("burgers", condition, function(res) {
//         cb(res);
//       });
//     }
//   };

// // Export the database functions for 
// // the controller (burgers_controller.js).
// module.exports = burger;


// Dependencies
// =============================================================

// Require the sequelize library
// Require the connection to the database (connection.js)

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Create a "Burger" model with the following configuration
// Set timestamps to false on this model

// Creates a "Character" model that matches up with DB
var Burgers = sequelize.define("burgers", {
    // // the routeName gets saved as a string
    // routeName: Sequelize.STRING,
    // the name of the burger (a string)
    burger_name: Sequelize.STRING,
   // and whether it has been devoured (a boolean)
    devoured: Sequelize.BOOLEAN = "TINYINT(1) NULL"
  }, {
    timestamps: false
  });

// Sync model with DB
Burgers.sync();
// Export the Burgers model for other files to use

module.exports = Burgers;

// module.exports = function(sequelize, DataTypes) {
//   var Post = sequelize.define("Post", {
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         len: [1]
//       }
//     },
//     body: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//       validate: {
//         len: [1]
//       }
//     },
//     category: {
//       type: DataTypes.STRING,
//       defaultValue: "Personal"
//     }
//   });
//   return Post;
// };