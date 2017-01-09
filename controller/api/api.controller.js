'use strict'

const mongoose = require('mongoose');
const Api = mongoose.model('Api');

exports.addApi = async (ctx, next) => {
	const result = await Api.create(ctx.request.body)
	if (!result) {
		ctx.body = {success: false}	
		return
	}
	ctx.body = {success: true, api_id: result._id}
}

exports.getApi = async (ctx) => {
	const id = ctx.params.id
	const api = await Api.findOne({_id: id}).exec()
	if (!api) {
		ctx.body = {success: false}	
		return
	}
	ctx.body = {data: api}
}

exports.updateApi = async (ctx) => {
	const id = ctx.params.id
	const api = await Api.findByIdAndUpdate(id, ctx.request.body, {new: true}).exec()
	if (!api) {
		ctx.body = {success: false}	
		return
	}
	ctx.body = {success: true, api_id: api._id}
}

exports.destroy = async (ctx) => {
	const id = ctx.params.id
	const api = await Api.remove({_id: id})
	if (!api) {
		ctx.body = {success: false}	
		return
	}
	ctx.body = {success: true}
}

exports.getApiList = async (ctx) => {
	let currentPage = parseInt(ctx.query.currentPage > 0 ? ctx.query.currentPage : 1)
	let itemsPerPage = parseInt(ctx.query.itemsPerPage > 0 ? ctx.query.itemsPerPage : 10)
	let startRow = (currentPage - 1) * itemsPerPage

	let sortName = String(ctx.query.sortName) || "publish_time"
	let sortOrder = ctx.query.sortOrder
	if(sortOrder === 'false'){
		sortName = "-" + sortName;
	}

	const ApiList = await Api.find()
																		.skip(startRow)
																		.sort({ createdAt: -1 })
																		.limit(itemsPerPage)
																		.exec()
  const count = await Api.count()
  if (!ApiList) {
		ctx.body = {success: false}	
		return
	}
  ctx.body = {data: ApiList, count: count}
}

exports.getApiListByCategoryId = async (ctx) => {
	let currentPage = parseInt(ctx.query.currentPage > 0 ? ctx.query.currentPage : 1)
	let itemsPerPage = parseInt(ctx.query.itemsPerPage > 0 ? ctx.query.itemsPerPage : 10)
	let startRow = (currentPage - 1) * itemsPerPage
	let categoryId = ctx.query.categoryId

	let sortName = String(ctx.query.sortName) || "createdAt"
	let sortOrder = ctx.query.sortOrder
	if(sortOrder === 'false'){
		sortName = "-" + sortName;
	}

	const ApiList = await Api.find({categoryId: categoryId})
																		.skip(startRow)
																		.sort({ createdAt: -1 })
																		.limit(itemsPerPage)
																		.exec()				
  const count = await Api.count()
  if (!ApiList) {
		ctx.body = {success: false}	
		return
	}
  ctx.body = {data: ApiList, count: count}
}

