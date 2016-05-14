exports.searchAllTagWithTagName = function(str,tag){


     return str.match(new RegExp('<'+tag+' [^>]+>',"g"))

}