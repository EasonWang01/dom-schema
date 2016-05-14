exports.searchAllTagwithStyle = function(str){
     return str.toString().match(new RegExp('<[^<]+style=[^>]+>',"g"))

}