/*
  Write code to make the number on the DOM countdown each second.
  Only one number should be displayed on the DOM at a time.

  HINT: look into javascript's setInterval() function.


  BONUS 1: Add a button for the user to reset the timer.
  BONUS 2: Make something cool happen using a jQuery animation when the timer gets to zero.
*/
$(document).ready(onReady);
console.log("ready");

//Function that runs when html is fully loaded:
function onReady(){

  // set initTime and resetTime to text of <div>class="count">10</div>
  var resetTime = $('.count').text();
  var initTime = $('.count').text();
  // countDown <div>class="count">10</div> to 0
  var countDown = setInterval(function(){decTime()}, 1000);

  function decTime() {
      if (initTime > 0){
        $('.count').text(initTime);
        initTime --;
     } else if (initTime === 0){
       $('.count').text(initTime);
       clearInterval(countDown);
       //animate $('.count')
       $('.count').css('color','red');
       $('.count').animate({fontSize: '15em'}, "slow");
     } //end else/if
  } //end decTime

  //reset when button clicked
  $('.reset').on('click', function (){
    $('.count').css({"color": "black", "font-size": "78px"});
    $('.count').text(resetTime);
    initTime = $('.count').text();
    setInterval(function(){decTime()}, 1000);
  });//end of reset

} // end on onReady
