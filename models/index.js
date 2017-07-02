/*
Mo Chowdhury
D3Tech.io
*/

// Require necessary modules.
const express  = require ('express'),
      db_props = require ('../config/db_conn'),
      router   = express.Router ();

// Process GET request to list all records in database.
router.get ('/', function (req, res, next) {
  db_props.getConnection (function (err, connection) {
    if (err) {
      throw err
    }
    else {
      connection.query ('SELECT acronym_name, acronym_description FROM acronyms', function (error, results) {
        if (error) {
          throw error;
        }
        else {
          res.render ('../views/index', {results: results})
        }
        connection.release ()
      })
    }
  })
})

// Export this router module.
module.exports = router
