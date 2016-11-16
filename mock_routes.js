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
		console.log(item.method.toLowerCase())
		router[item.method.toLowerCase()](item.path, async (ctx) => {
		  ctx.body = item.response;
		})
	})
})

// setTimeout(() => {
//   util.writeFileAsync(__dirname + '/watch/index.js', '// mock_routes引用了这份文件，一旦这份文件发送改变，nodemon就会检测到变化，于是机会重启服务，更新路由')
// }, 5000)

exports.router = router