/*
Mo Chowdhury
D3Tech.io
*/

// Require necessary modules.
const express  = require ('express'),
      db_props = require ('../config/db_conn'),
      router   = express.Router ({ mergeParams: true }) //Without mergeParams: true, the URI parameters aren't preserved; causing undefined error.

// Logic to search database.
router.get('/', function (req, res, next) {
  const uriParam = req.params.acronym_name // Assign acronym_name as it appears in URI to local variable.
  db_props.getConnection (function (err, connection) {
    if (err) {
      throw err
    }
    else {
      connection.query ('SELECT acronym_description FROM acronyms WHERE (acronym_name = ?)', [uriParam], function (error, result) {
        if (error) {
          throw error
        }
        else {
          res.render ('../views/description', {result: result})
        }
        connection.release ()
      })
    }
  })
})

// Export this router module.
module.exports = router
