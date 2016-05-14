exports.searchAllTagWithId = function(str){
     return	str.toString().match(new RegExp('<[^<]+id=[^>]+>',"g"))

}