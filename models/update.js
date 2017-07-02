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
  res.render ('../views/update')
})

router.use (bodyParser.urlencoded ({ extended: false }))

router.post ('/', function (req, res, next) {

  const acronymNameNew        = req.body.acronymNameNew,
        acronymNameOld        = req.body.acronymNameOld,
        acronymDescription    = req.body.acronymDescription,
        acronymBackgroundInfo = req.body.acronymBackgroundInfo;

  const acronymArry = [
    acronymNameNew,
    acronymDescription,
    acronymBackgroundInfo,
    acronymNameOld
  ]

  if (!req.body) {
    res.sendStatus (400)
  }
  else {
    db_props.getConnection (function (error, connection) {
      if (error) {
        throw error
      }
      else {
        connection.query ('UPDATE acronyms SET acronym_name = ?, acronym_description = ?, bg_info = ? WHERE acronym_name = ?', acronymArry, function (err, results) {
          if (err) {
            throw err
          }
          else {
            if (results.warningCount != 0) {
              res.send ('There was an error while updating record. <a href="/">Home</a> | <a href="/admin">Admin</a>.')
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
