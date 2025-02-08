

var num = 0

function counting(){
    num++
    var plus = document.getElementById("counting")
    plus.innerHTML = num

    if(plus.innerHTML == "100"){
        plus.style.fontSize = "150px"
    }

    else if(plus.innerHTML == "1000"){
        plus.style.fontSize = "100px"
    }

}


function countingminus(){
    num--
    var minus = document.getElementById("counting")
    minus.innerHTML = num
}

function reset(){
    num = 0
    var reset = document.getElementById("counting")
    reset.innerHTML = num
}