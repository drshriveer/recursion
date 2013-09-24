// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function (json) {

  var numberStarters = [0,1,2,3,4,5,6,7,8,9,'-'];

  // working below:  here is the recursion...
  // needs to CHECK that COMMAS are at the end of
  // a CLOSED set of numb
/*
  if( json[0] === '[' ){
    //the array case
    var array = [];
    var cut = 1;
    console.log("json length is ", json.length);
    for (var j = 0; j < json.length ; j++) {
      console.log('j is ', j);
      if (json[j] === '[' || '{'){ // First sub set is found!
        var cut = closureSearch(json, j) +1;
        array.push(parseJSON(json.slice(j, cut)));
        j = cut - 1;
        cut = j + 1;
      }
      else if(json[j] === ','){
        array.push(parseJSON(json.slice(cut,j)));
        cut = j + 1;
      }else if (j === json.length-1){
        array.push(parseJSON(json.slice(cut,j)));
      }
    }
    return array;

  } else if( json[0] === '{' ){
    //the object case
    var object = {};
    var cut = 1;
    var key = "";

    for(var i = 0; i < json.length; i++){
      if (json[i] === '[' || '{'){ // First sub set is found!
        var cut = closureSearch(json, i) +1;
        array.push(parseJSON(json.slice(i,cut)));
        i = cut;
        cut = i + 1;
      }else if(json[i] === ':'){
        key = json.slice(cut,i);
        cut = i + 1 ;
      } else if(json[i] === ','){
        object[key] = parseJSON(json.slice(cut,i));
        cut = i + 1;
      } else if( i === json.length-1){
        object[key] = parseJSON(json.slice(cut,i));
      }
    }

  } else if( _(numberStarters).contains(json[0]) ){
    //the number case
    return +json;
  } else{
    //the string case
    return json;
  }
*/
return json;
};


//closure search....
var closureSearch = function(json, startIndex){
  
  var searchingForBraket = (json[startIndex] === '[');
  var endIndex = 0;
  var numberOfUnclosedBrakets = 0;
  var numberOfUnclosedCurley = 0;


  for(var i = 0; i < json.length; i++){
    var car = json[i];
    if(car === '['){
      numberOfUnclosedBrakets++;
    } else if(car === ']'){
      numberOfUnclosedBrakets--;
      if(searchingForBraket && numberOfUnclosedBrakets === 0){
        endIndex = i;
        break;
      }
    } else if(car === '{'){
      numberOfUnclosedCurley++;
    } else if( car === '}'){
      numberOfUnclosedCurley--;
      if(!searchingForBraket && numberOfUnclosedCurley === 0){
        endIndex = i;
        break;
      }
    }
  }

  return endIndex;
};

var tester = function(json){
  if( json[0] === '[' ){
    //the array case
    var array = [];
    var cut = 1;

    for (var i = 1; i < json.length ; i++) {
      if (json[i] === '[' || json[i] === '{'){ // First sub set is found!
        cut = closureSearch(json, i);
        array.push(parseJSON(json.slice(i, cut)));
        i = cut - 1;
        cut = i + 1;
      }
      else if(json[i] === ','){
        array.push(parseJSON(json.slice(cut,i)));
        cut = i + 1;
      }else if (i === json.length-1){
        array.push(parseJSON(json.slice(cut,i)));
      }
    }
    return array;
  }

};

