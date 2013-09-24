// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function (json) {

  var numberStarters = [0,1,2,3,4,5,6,7,8,9,'-','.'];
      //DONT NEED EVERY INDEX ONLY FIRST AND LAST!
  var braketIndex = [];
  var curlyIndex = [];

  //builds indicies
  for(var i = 0; i < json.length; i++){
    var car = json[i];
    if(car === '[' || ']'){
      braketIndex.push(i);
    } else if(car === '{' || '}'){
      curlyIndex.push(i);
    }
  }

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



/** junk



  //find `& index " [] {}
  //DONT NEED EVERY INDEX ONLY FIRST AND LAST!
  var braketIndex = [];
  var curlyIndex = [];

  //builds indicies
  for(var i = 0; i < json.length; i++){
    var car = json[i]; 
    if(car === '[' || ']'){
      braketIndex.push(i);
    } else if(car === '{' || '}'){
      curlyIndex.push(i);
    }
  }


if(json[i] === ','){
        parseString(json.slice(startCut,i));
        startCut = i;
      } else if (json[i] === '['){
        endCut = braketIndex.length - 2;
        parseJSON( json.slice(i, braketIndex[ endCut ] ) );
        startCut = endCut;
        i = endCut - 1;
      } else if(json[i] === '{'){
        endCut = curlyIndex.length - 2;
        parseJSON( json.slice( i, curlyIndex[ endCut ] ) );
        startCut = endCut;
        i = endCut - 1;
      }




  if(braketIndex.length > 0 && curlyIndex.length > 0){
    if( braketIndex[0] < curlyIndex[0] ){ //brakets come first
      parseJSON(json.splice(braketIndex[0],braketIndex[braketIndex.length-1]));
    } else{ //curlies come first
      parseJSON(json.splice(curlyIndex[0],curlyIndex[curlyIndex.length-1]));
    }

  }else{

  }

  */