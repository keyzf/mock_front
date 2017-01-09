'strict mode'

const app = require('../../app')
const request = require('supertest')(app.listen())
const should = require("should") 
const mongoose = require('mongoose')
const	Category = mongoose.model('Category')

describe('test/category/category.test.js', () => {
	var mockCategoryId

	describe('post /category/addCategory', () => {
		it('should create a new category', (done) => {
	    request.post('/category/addCategory')
	    	.send({
	    		name: '测试分类'
	    	})
	    	.expect(200)
	    	.end(function (err, res) {
	    		if (err) return done(err)
	    		console.log('res.body.success', res.body.success)
	    		mockCategoryId = res.body.category_id
	    		res.body.success.should.be.true()
	    		res.body.category_id.should.be.String
					done()
	    	})
	  })
	})

	describe('get /category/:id/getCategory', () => {
		it('should return a category', (done) => {
	    request.get(`/category/${mockCategoryId}/getCategory`)
	    	.expect(200)
	    	.expect('Content-Type', /json/)
	    	.end(function (err, res) {
	    		if (err) return done(err)
	    		res.body.data._id.should.equal(mockCategoryId.toString())
					done()
	    	})
	  })
	})	

	describe('put /category/:id/updateCategory', () => {
		it('should return update a category', (done) => {
	    request.put(`/category/${mockCategoryId}/updateCategory`)
	    	.send({
	    		_id: mockCategoryId,
	    		name: '更新的名称' + new Date().getTime()
	    	})
	    	.expect(200)
	    	.expect('Content-Type', /json/)
	    	.end(function (err, res) {
	    		if (err) return done(err)
	    		res.body.success.should.be.true()
	    		res.body.category_id.should.be.String
					done()
	    	})
	  })
	})

	describe('get /category/getCategoryList', () => {
		it('should return category list', (done) => {
	    request.get('/category/getCategoryList')
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


	// it('should sort return category list',function (done) {
	// 	request.get('/category/getCategoryList')
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

	describe('delete /category/:id', () => {
		it('should return success', (done) => {
	    request.del(`/category/${mockCategoryId}`)
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