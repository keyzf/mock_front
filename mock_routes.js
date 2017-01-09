'use strict'

const mongoose = require('mongoose');
const Api = mongoose.model('Api');
const router = require('koa-router')();
const Mock = require('mockjs')

function handleRequest() {
	return async (ctx) => {
		let path = ctx.path
	  let api = await Api.find({path: path})
	  if (api.length == 0) {
	  	ctx.status = 402
	  	ctx.body = "接口不存在"
	  	return false
	  }

	  if (api[0].method == 'jsonp') {
	  	ctx.body = ctx.query.callback + '(' +  JSON.stringify(Mock.mock(JSON.parse(api[0].response))) + ')'	
	  } else {
	  	ctx.body = Mock.mock(JSON.parse(api[0].response))	
	  }
	}
}

router.get('/*', handleRequest())
router.post('/*', handleRequest())

exports.router = router