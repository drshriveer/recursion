// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  if(Array.isArray(obj)){
    return "[" + _(obj).map(function (element){
      return stringifyJSON(element);
    }).join(',') + "]";
  }else if(obj && typeof obj === "object") {
    return "{" + _(obj).map(function (val, key){
      return stringifyJSON(key) + ":" + stringifyJSON(val);
    }).join(',') + "}";
  }
  else if(typeof obj === "string"){
    return  '"' + obj + '"';
  }
  else{
    return obj + "";
  }
};