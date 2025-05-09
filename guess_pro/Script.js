let percen=document.getElementById("percentage");
let amount=document.getElementById("mid");
function finResu(){
    let end=((percen.value)/100)*amount.value;
    let fin=document.getElementById("aamount");
    fin.value=end
}