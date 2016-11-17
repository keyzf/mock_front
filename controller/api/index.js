'use strict'

const router = module.exports = require('koa-router')()
const controller = require('./api.controller')

router.post('/addApi', controller.addApi)
router.get('/:id/getApi', controller.getApi)
router.put('/:id/updateApi', controller.updateApi)
router.delete('/:id', controller.destroy)

router.get('/getApiList', controller.getApiList)
router.get('/getApiListByCategoryId', controller.getApiListByCategoryId)