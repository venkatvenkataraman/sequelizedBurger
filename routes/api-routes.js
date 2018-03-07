// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Grabbing our models

var db = require("../models/burger.js");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the burgers
  app.get("/", function(req, res) {
    db.Post.findAll({})
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // POST route for saving a new todo. You can create a todo using the data on req.body
  app.post("/api/burgers", function(req, res) {
    //insertOne code
    // burger.insertOne([
    //     "burger_name", "devoured"],[
    //         req.body.burger_name,req.body.devoured],
    // function(result) {
    // // Send back the ID of the new burger
    // res.json({ id: result.insertId });
    // });
  });

  // DELETE route for deleting todos. You can access the todo's id in req.params.id
  app.delete("/api/burgers/:id", function(req, res) {
    db.Post.destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // PUT route for updating todos. The updated todo will be available in req.body
  app.put("/api/burgers/:id", function(req, res) {
    db.Post.update(req.body,
        {
          where: {
            id: req.body.id
          }
        })
      .then(function(dbPost) {
        res.json(dbPost);
      });
    });

};
