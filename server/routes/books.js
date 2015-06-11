/*jslint node:true */

/** @module Routes for books */
/** @class */
var express = require('express');
var router = express.Router();

var controller = require('../app/controllers/books.js');

/** CREATE route for books */
router
    .post('/books', controller.create);

// RETRIEVE
router
    .get('/books', controller.list)
    .get('/books/:_id', controller.detail);

// UPDATE
router
    .put('/books/:_id', controller.updateOne);

// DELETE
router
    .delete('/books/:_id', controller.deleteOne);

module.exports = router;
