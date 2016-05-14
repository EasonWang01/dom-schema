exports.searchAllfunction = function(str){

   return str.toString().match(new RegExp('function[^{]+',"g"))

}