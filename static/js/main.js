var cards = [];
var t = 5000;
var i=0;
var ploader= document.getElementsByClassName("ploaderc");

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

//PreLoader
window.addEventListener("load",function(){
    sleep(3000);
    ploader[0].style.display ='none';
});

//slideShow
cards[0] = "s1";
cards[1] = "s2";
cards[2] = "s3";
cards[3] = "s4";
cards[4] = "s5";

function cardchange() {
    document.getElementById(cards[i]).checked=true;

    if(i < cards.length-1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout("cardchange()", t)
}

window.onload = cardchange;