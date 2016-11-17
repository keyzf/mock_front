'use strict'

var fs = require('fs')
var Promise = require('bluebird')
const mongoose = require('mongoose');
const Api = mongoose.model('Api');
const co = require('co');

exports.readFileAsync = function(fpath, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(fpath, encoding, (err, content) => {
      if (err) reject(err)
      else resolve(content)
    })
  })
}

exports.writeFileAsync = function(fpath, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fpath, content, (err) => {
      if (err) reject(err)
      else resolve()
    })
  })
}

exports.getRouteApi = function () {
  return new Promise((resolve, reject) => { 
    co(async () => {
      resolve(await Api.find({}))
    }).catch(function (err) {
      console.log('Init data error')
    })
  }) 
}

// relauch mock server
exports.relauchRouter = function () {
  exports.writeFileAsync(__dirname + '/watch/index.js', '// mock_routes引用了这份文件，一旦这份文件发送改变，nodemon就会检测到变化，于是机会重启服务，更新路由')
}