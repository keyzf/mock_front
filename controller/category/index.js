const router = module.exports = require('koa-router')()
const controller = require('./category.controller')

router.post('/addCategory', controller.addCategory)
router.get('/:id/getCategory', controller.getCategory)
router.put('/:id/updateCategory', controller.updateCategory)
router.delete('/:id', controller.destroy)

router.get('/getCategoryList', controller.getCategoryList)