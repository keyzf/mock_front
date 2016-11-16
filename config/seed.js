/**
 * 初始化数据
 */
'use strict';

const mongoose = require('mongoose');
const	Category = mongoose.model('Category');
const	Api = mongoose.model('Api');
const co = require('co');

//初始化api和category
module.exports = function () {
	co(async () => {
		const categoryCount = await Category.count();
		if(categoryCount === 0){
			await Category.create({
	 			name: '分类001'
	 		}, {
	 			name: '分类002'
	 		}, {
	 			name: '分类003'
	 		}, {
	 			name: '分类004'
	 		}, {
	 			name: '分类005'
	 		}, {
	 			name: '分类006'
	 		}, {
	 			name: '分类007'
	 		}, {
	 			name: '分类008'
	 		}, {
	 			name: '分类009'
	 		}, {
	 			name: '分类010'
	 		}, {
	 			name: '分类011'
	 		}, {
	 			name: '分类012'
	 		}, {
	 			name: '分类013'
	 		}, {
	 			name: '分类014'
	 		}, {
	 			name: '分类015'
	 		});
		}
		const categoryList = await Category.find();
		const apiCount = await Api.count();
		console.log('apiCount', apiCount)
		if(apiCount === 0){
			await Api.create({
	 			name: '测试接口001',
	 			path: '/api/test',
				method: 'get',
				json: '{"name": "admin"}',
				categoryId: categoryList[0]._id
	 		}, {
	 			name: '测试接口002',
	 			path: '/api/test',
				method: 'get',
				json: '{"name": "admin"}',
				categoryId: categoryList[0]._id
	 		}, {
	 			name: '测试接口003',
	 			path: '/api/test',
				method: 'get',
				json: '{"name": "admin"}',
				categoryId: categoryList[1]._id
	 		}, {
	 			name: '测试接口004',
	 			path: '/api/test',
				method: 'get',
				json: '{"name": "admin"}',
				categoryId: categoryList[1]._id
	 		}, {
	 			name: '分类接口005',
	 			path: '/api/test',
				method: 'get',
				json: '{"name": "admin"}',
				categoryId: categoryList[2]._id
	 		});
		}

	}).catch(function (err) {
		console.log('Init data error');
  });
}