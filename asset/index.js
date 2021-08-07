//using VANILLA js

//The aim of this modification is to reduce the overall size of the code though insignificant in this regard 
//but if this is to be applied in a large use case, it becomes very handy to reduce the size of the code.

var countA = 0;     //hold the score for team A.
var countB = 0;     //hold the score for team B.
var inputValue = 0; //keep track of the maximum score the players can attain.
var viewA = document.querySelector("#teamA") //selecting team A value.
var viewB = document.querySelector("#teamB") //selecting team B value.
var input = document.querySelector("input")  //selecting the input field.
var buttonA = document.querySelector("#teamAcontrol") //selecting team A button.
var buttonB = document.querySelector("#teamBcontrol") //selecting team B button.

var reset = document.querySelector("#reset") //resets the scores
var eventArray = [buttonA, buttonB];         //this array is used to hold all the button in one variable so we can
                                             //loop through it listening to the event attached to them.
var score = false                            //keep track of if there's a winner yet. 

input.addEventListener("change", function(){
    inputValue = input.value                 //eventListener attached to the input field.
})

eventArray.forEach((element) => {            //this block is a reuseable block to all the buttons so as to avoid 
                                             //the code in multiple places depending on the number of button. so in
                                             //an application where you have a large number of buttons, this will 
                                             //becomes handy.
    element.addEventListener("click", (e)=>{
        if(element === buttonA){
            count = [countA,viewA];
        }else{
            count = [countB,viewB];
        }
        if (score){       
            null      
        }else{
            if (inputValue === 0){
                null
            }else{
                count[0] += 1;                        
                count[1].textContent = count[0];
                 if(element === buttonA){
                    countA = count[0];
                }else{
                    countB = count[0];
                }
                if (Number(inputValue) === count[0]){
                    count[1].classList.add("header") //the classList property is used to apply style dynamically
                                                     //to an element.            
                    score = !score
                }
                }
            }
    })
})

reset.addEventListener("click", function(){        //This block reset the application to it initial state for a
                                                   //new game.
    inputValue = 0;
    countA = 0;
    viewA.textContent = countA;
    countB = 0;
    inputValue = 0;
    viewB.textContent = countB;
    input.value = 0;
    score = false;
    viewA.classList.remove("header")
    viewB.classList.remove("header")
})

