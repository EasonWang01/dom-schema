var assert = require('assert');
var htmlSchema = require('../index.js')


describe("view html Schema", function() {
	describe("schema", function() {
		it("get should return a dom", function(done) {


			htmlSchema.get('https://github.com/',function(result){
				
				assert.notEqual(result, null);
				done();
			})

			
		})


		it("search meta tags", function(done) {
			var meta = htmlSchema.searchAllMetaTag('<meta src="Im meta">')

			assert.notEqual(meta[0].search(/meta/g),-1)
	        done();	


		})

		it("search tags with id", function(done) {
			var meta = htmlSchema.searchAllTagWithId('<div id="Im_id"></div>')

			assert.notEqual(meta[0].search(/id/g),-1)
	        done();	


		})

		it("search tags with class", function(done) {
			var meta = htmlSchema.searchAllTagWithClass('<div class="Im_class"></div>')
			assert.notEqual(meta[0].search(/class/g),-1)
	        done();	


		})


		it("search tags with Tag Name", function(done) {
			var meta = htmlSchema.searchAllTagWithTagName('<script src="Im_scritp" ></script>','script')
			assert.notEqual(meta[0].search(/script/g),-1)
	        done();	


		})

		it("search tags with style attribute", function(done) {
			var meta = htmlSchema.searchAllTagwithStyle('<div style="background:yellow"></div><div></div>')
			assert.notEqual(meta[0].search(/style/g),-1)
	        done();	


		})

		it("search all function in file", function(done) {
			var meta = htmlSchema.searchAllfunction('function(){function(){}  }')
			assert.notEqual(meta[0].search(/function/g),-1)
	        done();	


		})

	})
})