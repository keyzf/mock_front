'use strict'

const mongoose = require('mongoose');
const Api = mongoose.model('Api');
const router = require('koa-router')();

function handleRequest() {
	return async (ctx) => {
		let path = ctx.path
	  let api = await Api.find({path: path})
	  if (api.length == 0) {
	  	ctx.status = 402
	  	ctx.body = "接口不存在"
	  	return false
	  }
	  ctx.body = api[0]
	}
}

router.get('/*', handleRequest())
router.post('/*', handleRequest())

exports.router = router