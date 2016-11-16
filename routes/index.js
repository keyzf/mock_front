var router = require('koa-router')();

const api = require('../controller/api')

router.use('/api', api.routes(), api.allowedMethods())

router.get('/', async (ctx) => {
  ctx.state = {
    title: 'koa2 title'
  };

  await ctx.render('index', {
  });
})
module.exports = router;
