// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
             
     if(_.isArray(obj)){
        var stringObj = "[";
        _.each(obj,function(val){
            if(_.isUndefined(val)){
              stringObj = stringObj.concat(stringifyJSON(null), ',');
            }
            else{
              stringObj = stringObj.concat(stringifyJSON(val), ',');
            }
        });

        if(stringObj.slice(-1) === ','){
          return (stringObj.slice(0,-1)).concat("]");
        }
        else
          return stringObj.concat("]")
     }
     else if(_.isNull(obj)){
        return "null";
     }
     else if (_.isUndefined(obj)){
        return "undefined";
     }
     else if (_.isFunction(obj)){
        return stringifyJSON(obj.apply());
     }
     else if(_.isObject(obj)) {
     	var stringObj = "{";

      _.each(obj, function(val,key){
        if(stringifyJSON(val) !== 'undefined') {
          stringObj = stringObj.concat('"', key.toString(), '":', stringifyJSON(val), ',');
        }
      });

        if(stringObj.slice(-1) === ','){
          return (stringObj.slice(0,-1)).concat("}");
        }
        else
          return stringObj.concat("}")
      }
      else {
        if(typeof obj === 'string'){
          return ('"').concat(obj,'"');
        }
        else
          return obj.toString();
      }
};