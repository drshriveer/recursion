var getElementsByClassName = function (className, node) {
  var results = [];
  node = node || document.documentElement;

  if (node.classList && node.classList.contains(className)) {
    results.push(node);
  }

  _(node.childNodes).each(function (child) {
    results = results.concat(getElementsByClassName(className, child));
  });

  return results;
};
