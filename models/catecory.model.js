'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CatecorySchema = new Schema({
	name: { 
		type: String,
		default: ''
	}
}, {
  timestamps: true
});

module.exports = mongoose.model('Category', CatecorySchema);