/*
Mo Chowdhury
D3Tech.io
*/

// Require necessary modules.
const express  = require ('express'),
      router   = express.Router ();

// Define route to admin template.
router.get ('/', function (req, res, next) {
  res.render ('../views/bug')
})

// Export this router module.
module.exports = router
