// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className, node) {
  var results = [];
  node = node || document.documentElement;
  //console.log(node.classList);
  if (node.classList && node.classList.contains(className)) {
    results.push(node);
  }

  _(node.childNodes).each(function (child) {
    results = results.concat(getElementsByClassName(className, child));
  });

  return results;
};
