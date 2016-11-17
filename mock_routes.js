'use strict'

const router = require('koa-router')();
const util = require('./util')
const watch = require('./watch')

router.get('/', async (ctx) => {
  ctx.body = {
    title: 'this is a mock server'
  };
})
	
util.getRouteApi().then((json) => {
	console.log(json)
	json.forEach((item) => {
		router[item.method.toLowerCase()](item.path, async (ctx) => {
		  ctx.body = JSON.parse(item.response);
		})
	})
})

exports.router = router