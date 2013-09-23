// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  if(Array.isArray(obj)){
    return "[" + _(obj).map(function (element){
      return stringifyJSON(element);
    }).join(',') + "]";
  }else if(obj && typeof obj === "object") {
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
  }
  else if(typeof obj === "string"){
    return  '"' + obj + '"';
  }
  else{
    return obj + "";
  }
};