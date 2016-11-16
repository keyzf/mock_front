'strict mode'

const app = require('../../app')
const request = require('supertest')(app.listen())
const should = require("should") 
const mongoose = require('mongoose')
const	Api = mongoose.model('Api')

describe('test/api/api.test.js', () => {
	let mockApiId
	let mockCategoryId = '582bfbb09def6065cab0f887' // 暂时写死

	describe('post /api/addApi', () => {
		it('should create a new api', (done) => {
	    request.post('/api/addApi')
	    	.send({
	    		name: '测试' + new Date().getTime(),
					path: '/test' + new Date().getTime(),
					method: 'get',
					json: '{"name": "admin"}',
					categoryId: mockCategoryId
	    	})
	    	.expect(200)
	    	.end(function (err, res) {
	    		if (err) return done(err)
	    		console.log('res.body.success', res.body.success)
	    		mockApiId = res.body.api_id
	    		res.body.success.should.be.true()
	    		res.body.api_id.should.be.String
					done()
	    	})
	  })
	})

	describe('get /api/:id/getApi', () => {
		it('should return a api', (done) => {
	    request.get(`/api/${mockApiId}/getApi`)
	    	.expect(200)
	    	.expect('Content-Type', /json/)
	    	.end(function (err, res) {
	    		if (err) return done(err)
	    		res.body.data._id.should.equal(mockApiId.toString())
					done()
	    	})
	  })
	})	

	describe('put /api/:id/updateApi', () => {
		it('should return update a api', (done) => {
	    request.put(`/api/${mockApiId}/updateApi`)
	    	.send({
	    		_id: mockApiId,
	    		name: '更新的标题' + new Date().getTime(),
	    		json: '{"name": "newName"}'
	    	})
	    	.expect(200)
	    	.expect('Content-Type', /json/)
	    	.end(function (err, res) {
	    		if (err) return done(err)
	    		res.body.success.should.be.true()
	    		res.body.api_id.should.be.String
					done()
	    	})
	  })
	})

	describe('get /api/getApiList', () => {
		it('should return api list', (done) => {
	    request.get('/api/getApiList')
	    	.expect(200)
	    	.expect('Content-Type', /json/)
	    	.end(function (err, res) {
	    		if (err) return done(err)
	    		res.body.data.length.should.be.above(0)
	    		res.body.count.should.be.Number
	    		res.body.count.should.be.above(0)
					done()
	    	})
	  })
	})	

	describe('get /api/getApiListByCategoryId', () => {
		it('should return api list', (done) => {
	    request.get('/api/getApiListByCategoryId')
	    	.send({
	    		mockCategoryId: mockCategoryId
	    	})
	    	.expect(200)
	    	.expect('Content-Type', /json/)
	    	.end(function (err, res) {
	    		if (err) return done(err)
	    		res.body.data.length.should.be.above(0)
	    		res.body.count.should.be.Number
	    		res.body.count.should.be.above(0)
					done()
	    	})
	  })
	})	

	// it('should sort return api list',function (done) {
	// 	request.get('/api/getApiList')
	// 		.query({
	// 			itemsPerPage:2
	// 		})
	// 		.expect(200)
	// 		.expect('Content-Type', /json/)
	// 		.end(function (err,res) {
	// 			if(err) return done(err)
	// 			res.body.data.length.should.be.above(0)
	// 			res.body.count.should.be.Number
	// 			res.body.count.should.be.above(0)
	// 			done()
	// 	})
	// })

	describe('delete /api/:id', () => {
		it('should return success', (done) => {
	    request.del(`/api/${mockApiId}`)
	    	.expect(200)
	    	.expect('Content-Type', /json/)
	    	.end(function (err, res) {
	    		if (err) return done(err)
	    		res.body.success.should.be.true()
					done()
	    	})
	  })
	})
})