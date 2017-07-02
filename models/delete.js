/*
Mo Chowdhury
D3Tech.io
*/

// Require necessary modules.
const express       = require ('express'),
      bodyParser    = require ('body-parser'),
      db_props      = require ('../config/db_conn')
      router        = express.Router ({mergeParams: true});

// Define route to admin template.
router.get ('/', function (req, res, next) {
  res.render ('../views/delete')
})

router.use (bodyParser.urlencoded ({extended: false}))

router.post ('/', function (req, res, next) {

  const acronymName = req.body.acronymName

  if (!req.body) {
    res.sendStatus (400)
  }
  else {
    db_props.getConnection (function (error, connection) {
      if (error) {
        throw error
      }
      else {
        connection.query ('DELETE FROM acronyms WHERE (acronym_name = ?)', acronymName, function (err, results) {
          if (err) {
            throw err
          }
          else {
            if (results.warningCount != 0) {
              res.send ('There was an error while deleting record. <a href="/">Home</a> | <a href="/admin">Admin</a>.')
            }
            else {
              res.redirect ('/')
            }
          }
          connection.release ()
        })
      }
    })
  }
})

// Export this router module.
module.exports = router
