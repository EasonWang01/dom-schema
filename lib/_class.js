exports.searchAllTagWithClass = function(str){
     return str.toString().match(new RegExp('<[^<]+class=[^>]+>',"g"))

}