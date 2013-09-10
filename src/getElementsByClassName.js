// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {

  var resultList = [];

  /****  TEST CODE

  console.log(document.body.childNodes[1]); // <div id="HTMLReporter" class="jasmine_reporter showDetails">...</div>
  var cl = document.body.childNodes[1].classList; 
  console.log(cl);  // DOMTokenList
                    // 0: "jasmine_reporter"
                    // 1: "showDetails"
                    // length: 2
                    // __proto__: DOMTokenList

  console.log(cl.length); // 1
  console.log(cl.contains('jasmine_reporter')); // true
  console.log(cl.contains('showDetails')); // false
  console.log(cl[0]); // jasmine_reporter
  console.log(cl[1]); // null
  console.log(_.values(cl)); // ["jasmine_reporter", 1] 

 */
  var recursionSearch = function(currentNode){

    if(currentNode.contains(className)){
      resultList.push(currentNode);
    }

    _.each(currentNode.childNodes, function(node){
      recursionSearch(node);
    });
  };

  recursionSearch(document.body);

  return resultList;

};