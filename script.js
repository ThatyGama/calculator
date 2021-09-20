
function insert(num){
    let numero = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = numero + num;

}

function limpar(){
    document.getElementById("resultado").innerHTML = "";
}

function back(){
    let resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = resultado.slice(0, -1)
    
}

function calcular(){
    let resultado = document.getElementById("resultado").innerHTML
    if (resultado){
        document.getElementById("resultado").innerHTML = eval(resultado)
    } 
}

var changeCalc = document.getElementsByClassName("calculadora")[0]
var changeBtn = document.getElementById("changeBtn")
var changeBtnWhite = document.getElementById("changeBtnWhite")
var changeResult = document.getElementById("resultado")

changeBtn.addEventListener('click',function(){
    changeCalc.style.color = "black"
    changeCalc.style.backgroundColor = "white"
    changeCalc.style.border = "6px solid gray"
    changeResult.style.backgroundColor = "rgb(8, 105, 52)"
    changeResult.style.color = "white"
})

changeBtnBlack.addEventListener('click', function(){
    changeCalc.style.backgroundColor = "rgba(0, 0, 0, 0.8)"
    changeCalc.style.border = "6px solid black"
    changeResult.style.backgroundColor = "rgb(8, 105, 52)"
    changeResult.style.color = "black"
    changeCalc.style.color = "white"
})