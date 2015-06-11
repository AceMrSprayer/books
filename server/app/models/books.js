/*jslint node:true */

(function () {
    "use strict";
    /**
     * Module dependencies.
     */
    var mongoose = require('mongoose'),
        Schema = mongoose.Schema,
        schemaName,
        modelName;

    /**
     * Creates a new mongoose schema.
     * @class Schema/Book
     * @returns Schema object
     * @see http://www.json.org/
     * @see http://mongoosejs.com/docs/schematypes.html
     * @see http://mongoosejs.com/docs/guide.html#collection
     */
    schemaName = new Schema(
        {
            title: {type: String, required: true, unique: true},
            author: {type: String, required: true},
            description: {type: String},
            modificationDate: {type: Date, "default": Date.now}
        },
        {collection: 'books'}
    );

    /**
     * Custom validator
     * @class Validator/Book/title
     * @returns true or false. In case of ```false```, a message 'Invalid title' is returned as well.
     * @see http://mongoosejs.com/docs/validation.html
     */
    schemaName.path('title').validate(function (val) {
        return (val !== undefined && val !== null && val.length >= 8);
    },  'Invalid title');

    /**
     * @class Model/Book
     * @see http://mongoosejs.com/docs/models.html
     */
    modelName = "Book";
    mongoose.model(modelName,schemaName);

}());