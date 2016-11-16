'use strict'

var fs = require('fs')
var Promise = require('bluebird')

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
    let json = [
      {
        "path": "/api/get",
        "method": "GET",
        "response": {name: "this is a get method"}
      },
      {
        "path": "/api/post",
        "method": "POST",
        "response": {name: "this is a post method"}
      }
    ]
    setTimeout(() => {
      resolve(json)
    }, 1000)  
  }) 
}