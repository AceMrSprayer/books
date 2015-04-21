/** TODO: Test with static-analyzer: hints */
/** TODO: Test with static-analyzer: define module */

/**
 * Module dependencies.
 * @type {exports}
 */

var fs = require('fs'),
    http = require('http'),
    express = require('express'),
    bodyParser = require('body-parser'),
    env,
    config,
    mongoose,
    models_path,
    models_files,
    app,
    routes_files;


/**
 * Load configuration
 * @type {*|string}
 */
env = process.env.NODE_ENV || 'development';
config = require('./config/config.js') [env];
/**
 * Bootstrap db connection
 * @type {exports}
 */
mongoose = require('mongoose');
mongoose.connect('config.db');

//Debugging
mongoose.connection.on('error', function (err)){
    console.error('MongoDB error: %s', err);
});
mongoose.set('debug', config.debug);


/**
 * Bootstrap models
 * @type {string}
 */
/** TODO: Read models */

/**
 * Use express
 * @type {*}
 */
/** TODO: Define express app */
/**
 * Express settings
 */
/** TODO: Define port for express app */

/**
 * Express middleware
 */
/** TODO: Add middleware to parse JSON input; @see https://github.com/expressjs/body-parser#bodyparserjsonoptions */
/** TODO: Add middleware to parse url-encoded input; @see https://github.com/expressjs/body-parser#bodyparserurlencodedoptions */

/**
 * Middleware to enable logging
 */
/** TODO: Add middleware to enable logging */

/**
 * Middleware to serve static page
 */
/** TODO: Define middleware to serve static pages */

/**
 * Bootstrap routes
 * @type {string}
 */
/** TODO: Add routes */

/**
 * Middleware to catch all unmatched routes
 */
/** TODO: Add middleware to catch other requests */

/** TODO: Export app */
