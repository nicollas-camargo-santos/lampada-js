let ligada = 0;
let contador = 0;

function trocaLampada (){
contador++;

console.log(contador)
// estrtura de controle
if(ligada == false){
    //troca lampada para ligada
 document.getElementById("lampada").src = "acesa.png";
 document.body.style.backgroundColor = "black";
    document.getElementById("botão").innerText = "desligar";
    

    alert("estado atual ligada")
}else{
    //troca lampada para desligada
 document.getElementById("lampada").src = "apagada.png";
 document.body.style.backgroundColor = "white";
    document.getElementById("botão").innerText = "ligar";}
    ligada = false;

    alert("estado atual desligada")

}