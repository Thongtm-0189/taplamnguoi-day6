/* add audio */
var audio = new Audio('countdown.mp3');
var audio2 = new Audio('jontron-alarm-clock1.mp3')

/* call var */
const main = document.getElementById("content")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
const text = document.getElementById("text")
const inputs = document.querySelectorAll("input")
console.log(inputs)

/* creative a new div for btn-reset */
const newDiv = document.createElement("div")

audio.loop = true

text.innerText = "Time you want"

/* function  */
function playSound(){
    const myCountDown = setInterval(countDown,1000)
    audio.play();
    newDiv.classList.add("non-poiter")
    if(seconds.value > 60|| seconds.value<0 || minutes.value<0 || (minutes.value==0 && seconds.value==0)){
        clearInterval(myCountDown)
        audio.pause()
        alert("ERROR seconds or minutes")
    }else{
        inputs.forEach(input => {
            input.classList.add("non-poiter")
        });
        newDiv.classList.add("non-poiter")
    }

    function countDown(){
        
        seconds.value--
        if(seconds.value<0){
            minutes.value--
            seconds.value=59
        }
        if(seconds.value==0 && minutes.value==0){
            minutes.value=0
            seconds.value=0
            audio.pause()
            clearInterval(myCountDown)
            audio2.play()
            setTimeout(btnreset,5500)
            text.innerText = "TIME OUT"
            newDiv.classList.remove("non-poiter")
        }
    }
    
}


function btnreset(){
    audio2.pause()
    newDiv.innerHTML = '<button onclick="reset()" class="btn-reset">reset</button>'
    main.appendChild(newDiv)
}

const btn_reset = document.getElementsByClassName(".btn-reset")

function reset(){
    minutes.value=""
    seconds.value=""
    text.innerText = "Time you want"
    inputs.forEach(input => {
        input.classList.remove("non-poiter")
    });
    newDiv.classList.add("non-poiter")
}
