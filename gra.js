let background = ['url("colors/green.png")', 'url("colors/red.png")', 'url("colors/blue.png")', 'url("colors/yellow.png")', 'url("colors/grey.png")'];
let mainCard = document.querySelector("#karta");
let liczba = -1;

let los1 = document.querySelector("#c1");
let los2 = document.querySelector("#c2");
let los3 = document.querySelector("#c3");
let los4 = document.querySelector("#c4");
let los5 = document.querySelector("#c5");
let los6 = document.querySelector("#c6");
let los7 = document.querySelector("#c7");
let los8 = document.querySelector("#c8");

let przyciskLosuj = document.querySelector('#losuj');
przyciskLosuj.addEventListener('click', losujPalete);



function losujPalete() {
    let green1 = "#00" + Math.floor(2+Math.random()*9).toString() + Math.floor(Math.random()*9).toString();
    let green2 = "#00" + Math.floor(Math.random()*9).toString() + Math.floor(1+Math.random()*9).toString();
    let green3 = "#00" + Math.floor(3+Math.random()*9).toString() + Math.floor(Math.random()*9).toString();
    let green4 = "#00" + Math.floor(Math.random()*9).toString() + Math.floor(4+Math.random()*9).toString();
    let green5 = "#00" + Math.floor(Math.random()*9).toString() + Math.floor(Math.random()*9).toString();
    let green6 = "#00" + Math.floor(Math.random()*9).toString() + Math.floor(Math.random()*9).toString();
    let green7 = "#00" + Math.floor(Math.random()*9).toString() + Math.floor(Math.random()*9).toString();
    let green8 = "#00" + Math.floor(Math.random()*9).toString() + Math.floor(Math.random()*9).toString();
    liczba++;
    
   
    if(liczba>4) {
        przyciskLosuj.innerHTML="koniec gry";
        losujPalete(false);
    }
   
    mainCard.style.backgroundImage= background[liczba];
    
    if(liczba ===0){
        los1.style.backgroundColor = green1 + "00";
        los2.style.backgroundColor = green2 + "00";
        los3.style.backgroundColor = green3 + "00";
        los4.style.backgroundColor = green4 + "00";
        los5.style.backgroundColor = green5 + "00";
        los6.style.backgroundColor = green6 + "00";
        los7.style.backgroundColor = green7 + "00";
        los8.style.backgroundColor = green8 + "00";
    }
    if(liczba ===1){
        los1.style.backgroundColor = "#ff0000";
        los2.style.backgroundColor = "#ff0000";
        los3.style.backgroundColor = "#ff0000";
        los4.style.backgroundColor = "#ff0000";
        los5.style.backgroundColor = "#ff0000";
        los6.style.backgroundColor = "#ff0000";
        los7.style.backgroundColor = "#ff0000";
        los8.style.backgroundColor = "#ff0000";
    }
    if(liczba ===2){
        los1.style.backgroundColor = "blue";
        los2.style.backgroundColor = "blue";
        los3.style.backgroundColor = "blue";
        los4.style.backgroundColor = "blue";
        los5.style.backgroundColor = "blue";
        los6.style.backgroundColor = "blue";
        los7.style.backgroundColor = "blue";
        los8.style.backgroundColor = "blue";
    }
    if(liczba ===3){
        los1.style.backgroundColor = "yellow";
        los2.style.backgroundColor = "yellow";
        los3.style.backgroundColor = "yellow";
        los4.style.backgroundColor = "yellow";
        los5.style.backgroundColor = "yellow";
        los6.style.backgroundColor = "yellow";
        los7.style.backgroundColor = "yellow";
        los8.style.backgroundColor = "yellow";
    }
    if(liczba ===4){
        los1.style.backgroundColor = "grey";
        los2.style.backgroundColor = "grey";
        los3.style.backgroundColor = "grey";
        los4.style.backgroundColor = "grey";
        los5.style.backgroundColor = "grey";
        los6.style.backgroundColor = "grey";
        los7.style.backgroundColor = "grey";
        los8.style.backgroundColor = "grey";
    }
}
