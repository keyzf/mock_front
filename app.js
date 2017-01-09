'use strict'

const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const co = require('co');
const convert = require('koa-convert');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');
const cors = require('kcors')
const mongoose = require('mongoose')
const path = require('path')
const fs = require('fs')
const config = require('./config/env')

// 连接数据库
mongoose.connect('mongodb://localhost/mock');
require(path.join(__dirname, 'models/api.model'));
require(path.join(__dirname, 'models/catecory.model'));

//mongoose promise 风格
mongoose.Promise = require('bluebird');

// 初始化数据
if(config.seedDB) { 
	const initData = require('./config/seed'); 
	initData();
}

// router
const router = require('./routes').router

// middlewares
app.use(convert(bodyparser));
app.use(convert(json()));
app.use(convert(logger()));
app.use(require('koa-static')(__dirname + '/public'));
app.use(cors());

app.use(views(__dirname + '/views', {
  extension: 'jade'
}));

// router.use('/', index.routes(), index.allowedMethods());
// router.use('/mock', mock.routes(), mock.allowedMethods());
// app.use(router.routes(), router.allowedMethods())

app.use(router.routes(), router.allowedMethods());
// response

app.on('error', function(err, ctx){
  console.log(err)
  logger.error('server error', err, ctx);
});


module.exports = app;