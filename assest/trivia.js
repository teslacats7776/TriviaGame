const btnNext = document.getElementById("btnNext");
let answer = "";
let choices = ["True","False"];
let totalQs = "";
let rightAnswerCnt = "";
let intervalId ="";



btnNext.addEventListener ('click', function(){

//alert ("hello!");

fetch('https://opentdb.com/api.php?amount=30&category=15&difficulty=medium&type=boolean')
//fetch('http://jservice.io/api/random')  
.then(
    function(response) {
     
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
    console.log (data);

          answer = data.results[0].correct_answer;

          console.log (answer);
         const question = data.results[0].question;

         $("#question").text(question);
        


          
    
         

var id = setInterval(frame, 500);
intervalId = id;
var ele = document.getElementById("myBar");   
var width = 0;
  function frame() {
    
    if (width == 100) {btnNext.click();
      alert ("time out!!!"); 
      clearInterval(intervalId);
      totalQs++;
      
    } else {
      width++; 
      ele.style.width = width + '%'; 
    }
  
  }

displayAnswerButton();


      });
    }




  )


  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

 


function displayAnswerButton(){

  $("#answer").empty();
//     var button = document.createElement("input");
//   button.type = "button";
//   button.id = "DisplayAnswer";
//   button.value = "Display Answer";
//     button.onclick = displayRightAnswer;
  
    
// var answerDiv = document.getElementById ("answer");
// answerDiv.appendChild (button); 
// answerDiv.style.display = "block";

for (var i = 0; i < choices.length; i++) {

  var a = $("<button>");
  // Adding a class of movie to our button
  a.addClass("choiceType");
  // Adding a data-attribute
  a.attr("data-name", choices[i]);
  // Providing the initial button text
  a.text(choices[i]);
  // Adding the button to the buttons-view div
  $("#answer").append(a);

  $("#answer").css("display", "block");

}
  
$(".choiceType").on("click", function(event) {
  event.preventDefault();

 console.log ($(this).attr("data-name"));



  if ($(this).attr("data-name") == answer ) { totalQs ++; rightAnswerCnt ++ ; btnNext.click();
    alert ("You Got it Right! The Answer is " + answer);
    clearInterval(intervalId);
  }
  else if ($(this).attr("data-name") != answer ) {totalQs ++;  btnNext.click();
    alert("wrong!, the answer is " + answer); clearInterval(intervalId);}
    
  

    $("#finalResult").text("you have guess correctly "+rightAnswerCnt+" out of " +totalQs);

  //  var b = $("<button>");
  // b.addClass("reset");
  // b.text("Reset");
  //  $("#finalResult").append(b); 


  //  b.onclick = resetValue ();  


})
// function resetValue () {  

//   answer = "";
//   totalQs = "";
//   rightAnswerCnt = "";
//   intervalId ="";

 
// }
} 
//end of loop


})



;