var htmlSchema = require('../index.js')

htmlSchema.get('https://github.com',function(result){


	console.log(htmlSchema.searchAllTagwithStyle(result))
})


//console.log(result)
//htmlSchema.searchAllMetaTag(result)
//htmlSchema.searchAllTagWithId(result)
//htmlSchema.searchAllTagWithClass(result)
//htmlSchema.searchAllTagWithTagName(result,'script')
//htmlSchema.searchAllTagwithStyle(result)

/*

htmlSchema.get('https://raw.githubusercontent.com/EasonWang01/Redux-tutorial/master/redux/reducer.js',function(result){


	console.log(htmlSchema.searchAllfunction(result))
})
*/