const router = require('koa-router')();
const api = require('./controller/api')
const category = require('./controller/category')

exports.router = router

router.use('/api', api.routes(), api.allowedMethods())
router.use('/category', category.routes(), category.allowedMethods())

router.get('/', async (ctx) => {
  ctx.state = {
    title: 'koa2 title'
  };

  await ctx.render('index', {
  });
})
