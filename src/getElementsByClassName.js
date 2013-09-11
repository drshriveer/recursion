// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {

  var resultList = [];
 
  var recursionSearch = function(currentNode){

    var cl = currentNode.classList;
    if(typeof cl !== 'undefined'){
      if(cl.contains(className)){
        resultList.push(currentNode);
      }
    }

    _.each(currentNode.childNodes, function(node){
      recursionSearch(node);
    });
    
  };

  recursionSearch(document.body);

  return resultList;

};