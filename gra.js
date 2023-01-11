
let mainCard = document.querySelector("#karta");
let colorMain = mainCard.style.backgroundColor;
let runda = -1;
let win = false;
let correct = new Audio("sound/correct.mp3");
let wrong = new Audio("sound/wrong.mp3");
let info = document.querySelector("#info");
let licznik = document.querySelector("#czas");
let milisekunda = 0;
let podliczenie = document.querySelector("#wynik");
let punkty = [0, 0, 0, 0, 0];





let los1 = document.querySelector("#c1");
let los2 = document.querySelector("#c2");
let los3 = document.querySelector("#c3");
let los4 = document.querySelector("#c4");
let los5 = document.querySelector("#c5");
let los6 = document.querySelector("#c6");
let los7 = document.querySelector("#c7");
let los8 = document.querySelector("#c8");

let przyciskLosuj = document.querySelector('#losuj');
przyciskLosuj.addEventListener('click', odliczanie);



function odliczanie(){
    win = false;
     
    function zegar(){
        if(win || runda > 4){
            
            clearInterval(timer);
            
        }
        else {   
            milisekunda++;
            licznik.innerHTML= (milisekunda/10).toFixed(1);
        }
    }
    let timer = setInterval(zegar,100);
}

function losujKolory(h){
    const s =  Math.floor(50+Math.random()*50).toString()+"%";
    const l =  Math.floor(50+Math.random()*50).toString()+"%";
    return "hsl(" + h + "," + s + "," + l + ")";
}

function losujKolory2(h,s){ 
    const l =  Math.floor(Math.random()*100).toString()+"%";
    return "hsl(" + h + "," + s + "%" + "," + l + ")";
}

przyciskLosuj.addEventListener('click', losujPalete);
function losujPalete() {

    

    los1.addEventListener('click',check);
    los2.addEventListener('click',check);
    los3.addEventListener('click',check);
    los4.addEventListener('click',check);
    los5.addEventListener('click',check);
    los6.addEventListener('click',check);
    los7.addEventListener('click',check);
    los8.addEventListener('click',check);
    
    let green1 = losujKolory(80);
    let green2 = losujKolory(90);
    let green3 = losujKolory(100); 
    let green4 = losujKolory(120);
    let green5 = losujKolory(130);
    let green6 = losujKolory(140);
    let green7 = losujKolory(150);
    let green8 = losujKolory(160);
    
    let red1 = losujKolory(0);
    let red2 = losujKolory(1);
    let red3 = losujKolory(2);
    let red4 = losujKolory(3);
    let red5 = losujKolory(4);
    let red6 = losujKolory(5);
    let red7 = losujKolory(6);
    let red8 = losujKolory(7);
    
    let blue1 =losujKolory(190);
    let blue2 =losujKolory(200);
    let blue3 =losujKolory(210);
    let blue4 =losujKolory(220);
    let blue5 =losujKolory(230);
    let blue6 =losujKolory(240);
    let blue7 =losujKolory(250);
    let blue8 =losujKolory(260);

    let yellow1 = losujKolory2(60,100);
    let yellow2 = losujKolory2(60,100);
    let yellow3 = losujKolory2(60,100);
    let yellow4 = losujKolory2(60,100);
    let yellow5 = losujKolory2(60,100);
    let yellow6 = losujKolory2(60,100);
    let yellow7 = losujKolory2(60,100);
    let yellow8 = losujKolory2(60,100);

    let grey1 = losujKolory2(50,2);
    let grey2 = losujKolory2(50,5);
    let grey3 = losujKolory2(50,8);
    let grey4 = losujKolory2(50,11);
    let grey5 = losujKolory2(50,14);
    let grey6 = losujKolory2(50,17);
    let grey7 = losujKolory2(50,20);
    let grey8 = losujKolory2(50,23);

    runda++;
    
    if(runda ===0){

        
        przyciskLosuj.innerHTML= "TURN 1";
        los1.style.backgroundColor = green1;
        los2.style.backgroundColor = green2;
        los3.style.backgroundColor = green3;
        los4.style.backgroundColor = green4; 
        los5.style.backgroundColor = green5; 
        los6.style.backgroundColor = green6; 
        los7.style.backgroundColor = green7; 
        los8.style.backgroundColor = green8;

        let greenPalete = [green1,green2, green3,green4,green5, green6,green7,green8];
        mainCard.style.backgroundColor = greenPalete[Math.floor(Math.random()*8)];
        przyciskLosuj.removeEventListener('click', losujPalete);
        przyciskLosuj.removeEventListener('click', odliczanie);
        
       
        
        
    }
    if(runda ===1){
        info.innerHTML = "?";
        przyciskLosuj.innerHTML= "TURN 2";
        los1.style.backgroundColor = red1;
        los2.style.backgroundColor = red2;
        los3.style.backgroundColor = red3;
        los4.style.backgroundColor = red4;
        los5.style.backgroundColor = red5;
        los6.style.backgroundColor = red6;
        los7.style.backgroundColor = red7;
        los8.style.backgroundColor = red8;

        let redPalete = [red1, red2, red3, red4, red5, red6, red7, red8];
        mainCard.style.backgroundColor= redPalete[Math.floor(Math.random()*8)];
        przyciskLosuj.removeEventListener('click', losujPalete);
        przyciskLosuj.removeEventListener('click', odliczanie);
        
        
    }
    if(runda ===2){
        info.innerHTML = "?";
        przyciskLosuj.innerHTML= "TURN 3";
        los1.style.backgroundColor = blue1;
        los2.style.backgroundColor = blue2;
        los3.style.backgroundColor = blue3;
        los4.style.backgroundColor = blue4;
        los5.style.backgroundColor = blue5;
        los6.style.backgroundColor = blue6;
        los7.style.backgroundColor = blue7;
        los8.style.backgroundColor = blue8;

        let bluePalete = [blue1, blue2, blue3, blue4, blue5, blue6, blue7, blue8];
        mainCard.style.backgroundColor = bluePalete[Math.floor(Math.random()*8)];
        przyciskLosuj.removeEventListener('click', losujPalete);
        przyciskLosuj.removeEventListener('click', odliczanie);
        
        
    }
    if(runda ===3){
        info.innerHTML = "?";
        przyciskLosuj.innerHTML= "TURN 4";
        los1.style.backgroundColor = yellow1;
        los2.style.backgroundColor = yellow2;
        los3.style.backgroundColor = yellow3;
        los4.style.backgroundColor = yellow4;
        los5.style.backgroundColor = yellow5;
        los6.style.backgroundColor = yellow6;
        los7.style.backgroundColor = yellow7;
        los8.style.backgroundColor = yellow8;

        let yellowPalete = [yellow1,yellow2, yellow3, yellow4, yellow5, yellow6, yellow7, yellow8];
        mainCard.style.backgroundColor = yellowPalete[Math.floor(Math.random()*8)];
        przyciskLosuj.removeEventListener('click', losujPalete);
        przyciskLosuj.removeEventListener('click', odliczanie);
        
    }
    if(runda ===4){
        info.innerHTML = "?";
        przyciskLosuj.innerHTML= "TURN 5";
        los1.style.backgroundColor = grey1;
        los2.style.backgroundColor = grey2;
        los3.style.backgroundColor = grey3;
        los4.style.backgroundColor = grey4;
        los5.style.backgroundColor = grey5;
        los6.style.backgroundColor = grey6;
        los7.style.backgroundColor = grey7;
        los8.style.backgroundColor = grey8;

        let greyPalete = [grey1,grey2, grey3, grey4, grey5, grey6, grey7, grey8];
        mainCard.style.backgroundColor = greyPalete[Math.floor(Math.random()*8)];
        przyciskLosuj.removeEventListener('click', losujPalete);
        przyciskLosuj.removeEventListener('click', odliczanie);
        
        
    }   
    if(runda>4) {
        info.innerHTML = " ";
        
        przyciskLosuj.innerHTML="FINISH";
        przyciskLosuj.removeEventListener('click', losujPalete);
        przyciskLosuj.removeEventListener('click', odliczanie);
        los1.removeEventListener('click',check);
        los2.removeEventListener('click',check);
        los3.removeEventListener('click',check);
        los4.removeEventListener('click',check);
        los5.removeEventListener('click',check);
        los6.removeEventListener('click',check);
        los7.removeEventListener('click',check);
        los8.removeEventListener('click',check);
    }
    
}

function check(event){
    
    let colorCode = event.target.style.backgroundColor;
    if(colorCode === mainCard.style.backgroundColor){
        info.innerHTML = "CORRECT!";
        
        correct.play();
        win = true;
        przyciskLosuj.addEventListener('click', odliczanie);
        przyciskLosuj.addEventListener('click', losujPalete);
        los1.removeEventListener('click',check);
        los2.removeEventListener('click',check);
        los3.removeEventListener('click',check);
        los4.removeEventListener('click',check);
        los5.removeEventListener('click',check);
        los6.removeEventListener('click',check);
        los7.removeEventListener('click',check);
        los8.removeEventListener('click',check);
        milisekunda = 0;
        przyciskLosuj.innerHTML= "NEXT TURN";
        
        
        
        
        punkty[runda]=roundScore(Number(licznik.innerHTML));
       
        
        let li = document.createElement("li");
        podliczenie.appendChild(li);
        podliczenie.lastChild.innerHTML =  punkty[runda];

        

        if(runda>=4){
            let suma = 0;
            for(i=0; i<punkty.length; i++){
                suma = suma + punkty[i];
            }
            licznik.textContent = "Zdobyłeś" + " " + suma + " " + "PUNKTÓW!";
            przyciskLosuj.innerHTML= "NEW GAME";
            przyciskLosuj.addEventListener('click',restart);
            info.innerHTML = "BRAWO!"
        }
    }
     else {
         info.innerHTML = "WRONG";
         wrong.play();
         milisekunda = milisekunda + 30;
     }
    
}
function roundScore(czasrundy){
    
    const rundaMax = 200;
    const rundaMin = 20;
    if(czasrundy<1){
        return rundaMax;
    } 
    return Math.max(rundaMin,rundaMax - (czasrundy * 20));
}
function restart(){
    location.reload();
}