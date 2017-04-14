/*
  Write the code to make clicking on the 'change-highlight' button give a box on the DOM
  the 'highlight' class to turn the box red.
  Each time the 'change-highlight' button is clicked, it should give the next square
  the 'highlight' class.
  Only 1 box should be highlighted at a time.
  You will need to add to the highlightASquare function,
  you are also welcome to write more than the given functions.
*/
var numberOfSquares = 10;

$(document).ready(onReady);

//Function that runs when html is fully loaded:
function onReady(){
  //click listener to button:
  $('.change-highlight').on('click', highlightASquare)

  //call to put starting squares on DOM
  appendSquaresToDom(numberOfSquares);
}

var counter = 0;

function highlightASquare(){
    //This variable stores an array of the elements with the 'square' class
    var arrayOfSquares = $('.square');
    //hightlight arrayOfSquares[i], add .hightlight style
    //target single square, each array element
    var singleSquare = ($('.square')[counter]);
    var prevSquare = ($('.square')[counter-1]);
    //loop through array index, different case for when 0, 10 and 1-9
    if (counter > 0 && counter <10) {
      $(singleSquare).addClass("highlight");
      $(prevSquare).removeClass("highlight");
      counter ++;
  } else if (counter == 10 ) {
      $(singleSquare).addClass("highlight");
      $(prevSquare).removeClass("highlight");
      counter = 0;
  }  else {
      $(singleSquare).addClass("highlight");
      $($('.square')[9]).removeClass("highlight");
      counter ++;
  } //end if if/else
} //end of highlightASquare function



//You don't need to change this function:
function appendSquaresToDom(number){
  var squaresToAppend = "";
 //concatenate string of squares
  for(var i = 0; i < number; i++){
    squaresToAppend += "<div class='square'></div>";
  }
  //append string of html
   $(".container").append(squaresToAppend);

}
