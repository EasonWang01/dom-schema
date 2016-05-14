


![ezgif com-video-to-gif](https://cloud.githubusercontent.com/assets/11001914/15268411/4341bbe4-1a10-11e6-8123-263156a1e072.gif)


#Install

```
npm install dom-schema
```


#How to use.

#get

```
var htmlSchema = require('../index.js')

htmlSchema.get('https://github.com/',function(result){
	console.log(result)
})
```
don't need to handle err,just one parameter in callback function. 

#searchAllMetaTag

```
var htmlSchema = require('../index.js')

htmlSchema.get('https://github.com/',function(result){
	console.log(htmlSchema.searchAllMetaTag(result))
})
```
output:
```
<meta ....>
<meta ....>
<meta ....>
```

#searchAllTagWithId

```
var htmlSchema = require('../index.js')

htmlSchema.get('https://github.com/',function(result){
	console.log(htmlSchema.searchAllTagWithId(result))
})

```
output:
```
all tags with an id attribute
```

#searchAllTagWithClass

```
var htmlSchema = require('../index.js')

htmlSchema.get('https://github.com/',function(result){
	console.log(htmlSchema.searchAllTagWithClass(result))
})
```

output:
```
all tags with an class attribute
```


#searchAllTagWithTagName

```
var htmlSchema = require('../index.js')

htmlSchema.get('https://github.com/',function(result){
	console.log(htmlSchema.searchAllTagWithTagName(result,'script'))
})
```

output:

```
all script tags.

You can also change to which tags you want to searching for.
```


#searchAllTagwithStyle

```
var htmlSchema = require('../index.js')

htmlSchema.get('https://github.com/',function(result){
	console.log(htmlSchema.searchAllTagwithStyle(result))
})
```

output:
```
all tags with an style attribute
```


#searchAllfunction
```
htmlSchema.get('https://raw.githubusercontent.com/EasonWang01/Redux-tutorial/master/redux/reducer.js',function(result){


	console.log(htmlSchema.searchAllfunction(result))
})
```

output:
```
output all functions inside
```

#LICENSE


MIT
