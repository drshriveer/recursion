// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function (json) {

  var numberStarters = [0,1,2,3,4,5,6,7,8,9,'-','.'];

  // working below:  here is the recursion...
  // needs to CHECK that COMMAS are at the end of
  // a CLOSED set of numb

  if( json[0] === '[' ){
    //the array case
    var array = [];
    var startCut = 1;

    for (var i = 0; i < json.length; i++) {
      if(json[i] === ','){
        array.push(parseJSON(json.slice(startCut,i-1)));
        startCut = i + 1;
      }else if (i === json.length-1){
        array.push(parseJSON(json.slice(startCut,i-1)));
      }
    }
    console.log(" after first for loop i is ", i);
    return array;

  } else if( json[0] === '{' ){
    //the object case
    var object = {};
    var startCut = 1;
    var key = "";

    for(var i = 0; i < json.length; i++){
      if(json[i] === ':'){
        key = json.slice(startCut,i);
        startCut = i + 1;
      } else if(json[i] === ','){
        object[key] = parseJSON(json.slice(startCut,i));
        startCut = i + 1;
      } else if( i === json.length-1){
        object[key] = parseJSON(json.slice(startCut,i));
      }
    }

  } else if( _(numberStarters).contains(json[0]) ){
    //the number case
    return +json;
  } else{
    //the string case
    return json;
  }

};
/*
var mapPairs = function(json){
  //DONT NEED EVERY INDEX ONLY FIRST AND LAST!
  var openBraketIndex = [];
  var openCurlyIndex = [];
  var closeBraketIndex = [];
  var closeCurlyIndex = [];

  //builds indicies
  for(var i = 0; i < json.length; i++){
    var car = json[i];
    if(car === '['){
      openBraketIndex.push(i);
    } else if(car === ']'){
      closeBraketIndex.push(i);
    } else if(car === '{'){
      openCurlyIndex.push(i);
    } else if( car === '}'){
      closeCurlyIndex.push(i);
    }
  }

  //find  SECOND obj/array inline
  //which is the first second?

  if(openBraketIndex[0] < openCurlyIndex[0] ){
    if(openBraketIndex[1] < openCurlyIndex[0]){
      //open Braket is first, second start is openBraket[1]

    } else if(openBraketIndex[1] > openCurlyIndex[0]){
      //open Braket is first, second start is curly[0] 
    }
  }else if ( openBraketIndex[0] > openCurlyIndex[0] ){
    if(openBraketIndex[0] > openCurlyIndex[1]){
      //open Curly is first, second start is curly[1] 
    } else if( openBraketIndex[0] < openCurlyIndex[1]){
      //open Curley is first, second start is braket[0]
    }
  }
};*/


//are there any 


//closure search....
var closureSearch = function(jsnon, startIndex){
  
  var searchingForBraket = (json[i] === '[') ? true || false;
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

  return [startIndex, endIndex]
} 
