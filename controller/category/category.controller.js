'use strict'

const mongoose = require('mongoose');
const Category = mongoose.model('Category');

exports.addCategory = async (ctx, next) => {
	const result = await Category.create(ctx.request.body)
	if (!result) {
		ctx.body = {success: false}	
		return
	}
	ctx.body = {success: true, category_id: result._id}
}

exports.getCategory = async (ctx) => {
	const id = ctx.params.id
	const category = await Category.findOne({_id: id}).exec()
	if (!category) {
		ctx.body = {success: false}	
		return
	}
	ctx.body = {success: true, data: category}
}

exports.updateCategory = async (ctx) => {
	const id = ctx.params.id
	const category = await Category.findByIdAndUpdate(id, ctx.request.body, {new: true}).exec()
	if (!category) {
		ctx.body = {success: false}	
		return
	}
	ctx.body = {success: true, category_id: category._id}
}

exports.destroy = async (ctx) => {
	const id = ctx.params.id
	const category = await Category.remove({_id: id})
	if (!category) {
		ctx.body = {success: false}	
		return
	}
	ctx.body = {success: true}
}

exports.getCategoryList = async (ctx) => {
	let currentPage = parseInt(ctx.query.currentPage > 0 ? ctx.query.currentPage : 1)
	let itemsPerPage = parseInt(ctx.query.itemsPerPage > 0 ? ctx.query.itemsPerPage : 10)
	let startRow = (currentPage - 1) * itemsPerPage

	let sortName = String(ctx.query.sortName) || "createdAt"
	let sortOrder = ctx.query.sortOrder
	if(sortOrder === 'false'){
		sortName = "-" + sortName;
	}

	const CategoryList = await Category.find()
																		.skip(startRow)
																		.sort({ createdAt: -1 })
																		.limit(itemsPerPage)
																		.exec()
  const count = await Category.count()
  if (!CategoryList) {
		ctx.body = {success: false}	
		return
	}
  ctx.body = {data: CategoryList, count: count}
}

