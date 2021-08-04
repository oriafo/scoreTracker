var countA = 0;     //hold the score for team A
var countB = 0;     //hold the score for team B
var inputValue = 0; //keep track of the maximum score the players can attain
var viewA = document.querySelector("#teamA") //selecting team A value 
var viewB = document.querySelector("#teamB") //selecting team B value 
var input = document.querySelector("input")  //selecting the input field
var buttonA = document.querySelector("#teamAcontrol") //selecting team A button
var buttonB = document.querySelector("#teamBcontrol") //selecting team B button
var reset = document.querySelector("#reset") //resets the scores
var score = false

input.addEventListener("change", function(){
    inputValue = input.value
    console.log("value: ", inputValue)
})

buttonA.addEventListener("click", function(){
    if (score){       
        null      
    }else{
        if (inputValue === 0){
             null
        }else{
            countA += 1;
            //console.log("countA: ", countA)
            //console.log("inputValue: ", inputValue)
            viewA.textContent = countA;
            if (Number(inputValue) === countA){
                console.log(score)
                viewA.classList.add("header")            
                score = !score
                console.log(score) 
            }
            }
        }
    })

buttonB.addEventListener("click", function(){
    if (score){           
            null       
    }else{
        if (inputValue === 0){
            null
        }else{
            countB += 1;
            viewB.textContent = countB;
            if (Number(inputValue) === countB){
                console.log(score)
                viewB.classList.add("header")            
                score = !score
                console.log(score)
            }
        }
        
    }
})

reset.addEventListener("click", function(){
    inputValue = 0;
    countA = 0;
    viewA.textContent = countA;
    countB = 0;
    viewB.textContent = countB;
    input.value = 0;
    viewA.classList.remove("header")
    viewB.classList.remove("header")
})

