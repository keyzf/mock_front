var fs = require('fs')
var router = require('koa-router')();
var util = require('../util')

router.get('/get', async (ctx) => {
  var data = await util.readFileAsync(__dirname + '/data.json')
  ctx.body = {
  	result: true,
  	data: JSON.parse(data.toString())
  }
});

router.post('/save', async (ctx) => {
	// await util.writeFileAsync(__dirname + '/data.json', JSON.stringify(ctx.request.body))

  console.log(ctx.request.body)

  ctx.body = {
  	result: true,
  	desc: '保存成功'
  }
});

module.exports = router;
