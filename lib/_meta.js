exports.searchAllMetaTag = function(str){
     return	str.toString().match(/<meta[^>]+>/g)

}