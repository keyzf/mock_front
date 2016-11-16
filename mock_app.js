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

// 连接数据库
mongoose.connect('mongodb://localhost/test');
require(path.join(__dirname, 'models/api.model'));

//mongoose promise 风格
mongoose.Promise = require('bluebird');

// router
const router = require('./mock_routes').router

// middlewares
app.use(convert(bodyparser));
app.use(convert(json()));
app.use(convert(logger()));
app.use(require('koa-static')(__dirname + '/public'));
app.use(cors());

app.use(views(__dirname + '/views', {
  extension: 'jade'
}));

app.use(router.routes(), router.allowedMethods());
// response

app.on('error', function(err, ctx){
  console.log(err)
  logger.error('server error', err, ctx);
});


module.exports = app;