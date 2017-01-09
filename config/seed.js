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
	 			name: '决战双11'
	 		}, {
	 			name: '翻拍手气王'
	 		});
		}
		const categoryList = await Category.find();
		const apiCount = await Api.count();
		if(apiCount === 0){
			await Api.create({
	 			name: '初始化接口',
	 			path: '/service/act/viphd/1611doubleeleven/indexInfo',
				method: 'get',
				response: '{"result":true,"code":0,"desc":null,"data":{"payUrl2":["http://vip.yy.com/vip/vmall2/hdplatform/fromProductId/602254","http://vip.yy.com/vip/vmall2/hdplatform/fromProductId/602256"],"drawGiftGroupId2":"20161173f92e972","payUrls1":["http://vip.yy.com/vip/vmall2/hdplatform/fromProductId/602246","http://vip.yy.com/vip/vmall2/hdplatform/fromProductId/602258","http://vip.yy.com/vip/vmall2/hdplatform/fromProductId/602248","http://vip.yy.com/vip/vmall2/hdplatform/fromProductId/602250"],"drawGiftGroupId3":"20161173f92e625","hdTime":{"startDate":1478685000000,"endDate":1479808800000,"over":false,"startDateStr":"2016-11-09 17:50:00","endDateStr":"2016-11-22 18:00:00"},"drawGiftGroupId1":"20161173f92e240","payUrl3":["http://vip.yy.com/vip/vmall2/hdplatform/fromProductId/602260","http://vip.yy.com/vip/vmall2/hdplatform/fromProductId/602262","http://vip.yy.com/vip/vmall2/hdplatform/fromProductId/602264"],"flag1":1,"hdIndex":"20161173f92e","flag2":1}}',
				categoryId: categoryList[0]._id
	 		}, {
	 			name: '初始化接口',
	 			path: '/service/act/1611poker/indexinfo',
				method: 'get',
				response: '{"result":false,"code":0,"desc":null,"data":{"actDate":{"startDate":1479295200000,"endDate":1481104800000,"over":false,"startDateStr":"2016-11-16 19:20:00","endDateStr":"2016-12-07 18:00:00"},"cardsGroup":[],"leftCount":0}}',
				categoryId: categoryList[1]._id
	 		});
		}

	}).catch(function (err) {
		console.log('Init data error');
  });
}