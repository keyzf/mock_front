'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ApiSchema = new Schema({
	name: { 
		type: String,
		default: ''
	},
	path: { 
		type: String,
		default: ''
	},
	method: { 
		type: String,
		default: ''
	},
	json: { 
		type: String,
		default: ''
	},
	categoryId: {
		type: String,
		default: ''
	}
}, {
  timestamps: true
});

module.exports = mongoose.model('Api', ApiSchema);