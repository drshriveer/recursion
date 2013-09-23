var stringifyJSON = function (obj) {
  // Handling arrays.
  if (Array.isArray(obj)){
    return "[" + _(obj).map(function (element){
      return stringifyJSON(element);
    }).join(',') + "]";
  // Handling objects.
  } else if (obj && typeof obj === "object") {
    var toReturn = _(obj).map(function (val, key){
      if (typeof val === "function") {
        val = val();
      }
      if (val !== undefined) {
        return stringifyJSON(key) + ":" + stringifyJSON(val);
      } else {
        return null;
      }
    });
    return '{' + _(toReturn).filter(function (element){
      return (element !== null);
    }).join(',') + '}';
  // Handling strings.
  } else if (typeof obj === "string"){
    return  '"' + obj + '"';
  // Everything else.
  } else {
    return obj + "";
  }
};