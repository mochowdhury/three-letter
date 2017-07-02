/*
Mo Chowdhury
D3Tech.io
*/

// Load environment variables.
require ('dotenv').load ()

// Call necessary modules.
const express       = require ('express'),
      ejs           = require ('ejs'),
      path          = require ('path'),
      logger        = require ('morgan'),
      compress      = require ('compression'),
      index         = require ('../models/index'),
      description   = require ('../models/description'),
      create        = require ('../models/create'),
      update        = require ('../models/update'),
      deleteRecord  = require ('../models/delete')
      bug           = require ('../models/bug'),
      tla           = express ();

// Set up logger middleware.
tla.use (logger ('dev'))

// Set compression.
tla.use (compress ())

// Use the path module to define path to views directory.
tla.set ('views', path.join (__dirname, '../views'))

// Set view engine to Embeded JavaScript (EJS).
tla.set ('view engine', 'ejs')

/* Set static assets directory.
Tons of issues getting this to work.
I initially didn't understand how to link static resources on partials that were being inherited by views files.
The proper way to link them was to set the static files middle ware to use the assets directory.
Then, on the partials files, I simply had to reference the subdirectories and files within them. For example:
<link href="css/bootstrap.min.css" rel="stylesheet">
*/
tla.use (express.static (path.join(__dirname, '../assets')))

// The path to static properties is relative to the route being used. This route needed an alias (so to speak).
tla.use ('/description', express.static (path.join(__dirname, '../assets')))

// Set up routes.
tla.use ('/', index)
tla.use ('/description/:acronym_name', description)
tla.use ('/bug', bug)
tla.use ('/create', create)
tla.use ('/update', update)
tla.use ('/delete', deleteRecord)

// Set environment variable for TCP port to a local variable.
const tla_tcp_port = process.env.TLA_TCP_PORT

tla.listen(tla_tcp_port, function () {
  console.log('TLA is available on port: ' + tla_tcp_port + '.')
})
