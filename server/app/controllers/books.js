/*jslint node: true*/
"use strict";

var mongoose = require('mongoose'),
    Book = mongoose.model('Book');
/**
 * CREATE a book
 * Errors are not thrown in the node application but returned to the user.
 * - Question: What will happen if you throw an error on the server?
 * @param req
 * @param res
 * @see http://docs.mongodb.org/manual/reference/method/db.collection.save/
 * @see http://mongoosejs.com/docs/api.html#model_Model-save
 * @module books/create
 */
exports.create = function (req, res) {

 var doc = new Book(req.body);

 doc.save(function(err) {

  var retObj = {
   meta:{"action": "create",
       'timestamp': new Date(),
       filename: __filename},
   doc: doc,
   err: err
  };

  return res.send(retObj);

 });

};

/**
 * RETRIEVE _all_ books
 * Errors are not thrown in the node application but returned to the user.
 * - Question: What will happen if you throw an error on the server?
 * @param req
 * @param res
 * @see http://docs.mongodb.org/manual/reference/method/db.collection.find/
 * @see http://mongoosejs.com/docs/api.html#model_Model.find
 * @module books/list
 */
exports.list = function (req, res) {
 var conditions, fields, sort;

 conditions = {};
 fields = {};
 sort = {'modificationDate': -1};

 Book
     .find(conditions, fields)
     .sort(sort)
     .exec(function (err, doc) {

      var retObj = {
       meta:{"action": "list",
        'timestamp': new Date(),
        filename: __filename},
       doc: doc,
       err: err
      };

      return res.send(retObj);

     });
};

/**
 * RETRIEVE _one_ book
 * @module books/detail
 * @param req
 * @param res
 * @see http://docs.mongodb.org/manual/reference/method/db.collection.findOne/
 * @see http://mongoosejs.com/docs/api.html#model_Model.findOne
 */
exports.detail = function (req, res) {
   var conditions, fields;

   conditions = {_id: req.params._id};
   fields = {};

   Book
     .findOne(conditions, fields)
     .exec(function (err, doc) {
        var retObj = {
           meta:{"action": "detail", 'timestamp': new Date(), filename: __filename},
           doc: doc,
           err: err
        };
        return res.send(retObj);

     });
};

/**
 * UPDATE book
 * @module books/update
 * @param req
 * @param res
 * @see http://docs.mongodb.org/manual/reference/method/db.collection.update/
 * @see http://docs.mongodb.org/manual/reference/method/db.collection.save/
 * @see http://mongoosejs.com/docs/api.html#model_Model.findOneAndUpdate
 */
exports.updateOne = function (req, res) {
    var conditions = {_id: req.params._id},
        update = {
            title: req.body.title || '',
            author: req.body.author || '',
            description: req.body.description || ''
        },
        options = {multi: false},
        callback = function (err, doc) {
            var retObj = {
                meta: {"action": "update", 'timestamp': new Date(), filename: __filename},
                doc: doc,
                err: err
            };
            return res.send(retObj);
        };
    Book
        .findOneAndUpdate(conditions, update, options, callback);
};

/**
 * DELETE _one_ book
 * @module books/detail
 * @param req
 * @param res
 * @see http://docs.mongodb.org/manual/reference/method/db.collection.remove/
 * @see http://mongoosejs.com/docs/api.html#model_Model.remove
 */
exports.deleteOne = function (req, res) {
    var conditions, callback, retObj;

    conditions = {_id: req.params._id};
    callback = function (err, doc) {
        retObj = {
            meta: {"action": "delete", 'timestamp': new Date(), filename: __filename},
            doc: doc,
            err: err
        };
        return res.send(retObj);
    };
    Book
        .remove(conditions, callback);
};