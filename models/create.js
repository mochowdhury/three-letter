/*
Mo Chowdhury
D3Tech.io
*/

/*
Initially, I couldn't figure out how the body-parser module worked.
Later, it became apparent that I needed to use bodyParser.urlencoded
with the extended: false option and in the HTML form, I had to define
enctype="application/x-www-form-urlencoded". When I had enctype="multipart",
I was getting an error about going out of range.
*/

// Require necessary modules.
const express     = require ('express'),
      bodyParser  = require ('body-parser'),
      db_props    = require ('../config/db_conn')
      router      = express.Router ({mergeParams: true});

// Define route to admin template.
router.get ('/', function (req, res, next) {
  res.render ('../views/create')
})

// Process POST request to add a database record.
router.use (bodyParser.urlencoded ({extended: false}))

router.post ('/', function (req, res, next) {

  // Assign the values of each of the keys in the json object to a local variable.
  const acronymName           = req.body.acronymName,
        acronymDescription    = req.body.acronymDescription,
        acronymBackgroundInfo = req.body.acronymBackgroundInfo;

  // Create an arry consisting the local variables; required for MySQL query.
  const nestedArray = [
    acronymName,
    acronymDescription,
    acronymBackgroundInfo
  ]

  if (!req.body) {
    return res.sendStatus (400)
  }
  else {
    db_props.getConnection (function (error, connection) {
      if (error) {
        throw error
      }
      else {
        connection.query ('INSERT INTO acronyms (acronym_name, acronym_description, bg_info) VALUES (?, ?, ?)', nestedArray, function (err, results) {
          if (err) {
            throw err
          }
          else {
            if (results.warningCount != 0) {
              res.send ('There was an error while inserting record. <a href="/">Home</a> | <a href="/admin">Admin</a>.')
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
