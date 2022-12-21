//let background = ['url("colors/green.png")', 'url("colors/red.png")', 'url("colors/blue.png")', 'url("colors/yellow.png")', 'url("colors/grey.png")'];
let mainCard = document.querySelector("#karta");
let liczba = -1;
let licznik = document.querySelector("#czas");


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
let sekunda = 0;
function zegar(){
    sekunda++
    
    licznik.innerHTML= (sekunda/10).toFixed(1);
    setInterval(przecinek, 10);
    
    
}
setInterval(zegar,100);
}

przyciskLosuj.addEventListener('click', losujPalete);
function losujPalete() {
    let green1 = "hsl"+"("+"80"+","+ Math.floor(50+Math.random()*50).toString()+"%" +","+ Math.floor(Math.random()*50).toString()+"%"+")";
    let green2 =  "hsl"+"("+"90"+","+ Math.floor(50+Math.random()*50).toString()+"%" +","+ Math.floor(Math.random()*50).toString()+"%"+")";
    let green3 =  "hsl"+"("+"100"+","+ Math.floor(50+Math.random()*50).toString()+"%" +","+ Math.floor(Math.random()*50).toString()+"%"+")";
    let green4 =  "hsl"+"("+"110"+","+ Math.floor(50+Math.random()*50).toString()+"%" +","+ Math.floor(Math.random()*50).toString()+"%"+")";
    let green5 =  "hsl"+"("+"120"+","+ Math.floor(50+Math.random()*50).toString()+"%" +","+ Math.floor(Math.random()*50).toString()+"%"+")";
    let green6 =  "hsl"+"("+"130"+","+ Math.floor(50+Math.random()*50).toString()+"%" +","+ Math.floor(Math.random()*50).toString()+"%"+")";
    let green7 =  "hsl"+"("+"140"+","+ Math.floor(50+Math.random()*50).toString()+"%" +","+ Math.floor(Math.random()*50).toString()+"%"+")";
    let green8 =  "hsl"+"("+"150"+","+ Math.floor(50+Math.random()*50).toString()+"%" +","+ Math.floor(Math.random()*50).toString()+"%"+")";
    
    let red1 = "hsl"+"("+"0"+","+ Math.floor(50+Math.random()*50).toString()+"%" +","+ Math.floor(Math.random()*50).toString()+"%"+")";
    let red2 =  "hsl"+"("+"1"+","+ Math.floor(50+Math.random()*50).toString()+"%" +","+ Math.floor(Math.random()*50).toString()+"%"+")";
    let red3 =  "hsl"+"("+"2"+","+ Math.floor(50+Math.random()*50).toString()+"%" +","+ Math.floor(Math.random()*50).toString()+"%"+")";
    let red4 =  "hsl"+"("+"3"+","+ Math.floor(50+Math.random()*50).toString()+"%" +","+ Math.floor(Math.random()*50).toString()+"%"+")";
    let red5 =  "hsl"+"("+"4"+","+ Math.floor(50+Math.random()*50).toString()+"%" +","+ Math.floor(Math.random()*50).toString()+"%"+")";
    let red6 =  "hsl"+"("+"5"+","+ Math.floor(50+Math.random()*50).toString()+"%" +","+ Math.floor(Math.random()*50).toString()+"%"+")";
    let red7 =  "hsl"+"("+"6"+","+ Math.floor(50+Math.random()*50).toString()+"%" +","+ Math.floor(Math.random()*50).toString()+"%"+")";
    let red8 =  "hsl"+"("+"7"+","+ Math.floor(50+Math.random()*50).toString()+"%" +","+ Math.floor(Math.random()*50).toString()+"%"+")";
    
    let blue1 = "hsl"+"("+"190"+","+ Math.floor(50+Math.random()*50).toString()+"%" +","+ Math.floor(Math.random()*50).toString()+"%"+")";
    let blue2 =  "hsl"+"("+"200"+","+ Math.floor(50+Math.random()*50).toString()+"%" +","+ Math.floor(Math.random()*50).toString()+"%"+")";
    let blue3 =  "hsl"+"("+"210"+","+ Math.floor(50+Math.random()*50).toString()+"%" +","+ Math.floor(Math.random()*50).toString()+"%"+")";
    let blue4 =  "hsl"+"("+"220"+","+ Math.floor(50+Math.random()*50).toString()+"%" +","+ Math.floor(Math.random()*50).toString()+"%"+")";
    let blue5 =  "hsl"+"("+"230"+","+ Math.floor(50+Math.random()*50).toString()+"%" +","+ Math.floor(Math.random()*50).toString()+"%"+")";
    let blue6 =  "hsl"+"("+"240"+","+ Math.floor(50+Math.random()*50).toString()+"%" +","+ Math.floor(Math.random()*50).toString()+"%"+")";
    let blue7 =  "hsl"+"("+"250"+","+ Math.floor(50+Math.random()*50).toString()+"%" +","+ Math.floor(Math.random()*50).toString()+"%"+")";
    let blue8 =  "hsl"+"("+"260"+","+ Math.floor(50+Math.random()*50).toString()+"%" +","+ Math.floor(Math.random()*50).toString()+"%"+")";

    let yellow1 = "hsl"+"("+"60"+","+ "100"+"%" +","+ Math.floor((Math.random()*100)/1.4).toString()+"%"+")";
    let yellow2 =  "hsl"+"("+"60"+","+"100"+"%" +","+ Math.floor((Math.random()*100)/1.7).toString()+"%"+")";
    let yellow3 =  "hsl"+"("+"60"+","+"100"+"%" +","+ Math.floor((Math.random()*100)/1.9).toString()+"%"+")";
    let yellow4 =  "hsl"+"("+"60"+","+"100"+"%" +","+ Math.floor((Math.random()*100)/2.1).toString()+"%"+")";
    let yellow5 =  "hsl"+"("+"60"+","+"100"+"%" +","+ Math.floor((Math.random()*100)/2.3).toString()+"%"+")";
    let yellow6 =  "hsl"+"("+"60"+","+"100"+"%" +","+ Math.floor((Math.random()*100)/2.5).toString()+"%"+")";
    let yellow7 =  "hsl"+"("+"60"+","+"100"+"%" +","+ Math.floor((Math.random()*100)/2.7).toString()+"%"+")";
    let yellow8 =  "hsl"+"("+"60"+","+"100"+"%" +","+ Math.floor((Math.random()*100)/3).toString()+"%"+")";

    let grey1 = "hsl"+"("+"50"+","+ "2"+"%" +","+ Math.floor((Math.random()*100)/1.4).toString()+"%"+")";
    let grey2 = "hsl"+"("+"50"+","+ "5"+"%" +","+ Math.floor((Math.random()*100)/1.7).toString()+"%"+")";
    let grey3 = "hsl"+"("+"50"+","+ "8"+"%" +","+ Math.floor((Math.random()*100)/1.9).toString()+"%"+")";
    let grey4 = "hsl"+"("+"50"+","+ "11"+"%" +","+ Math.floor((Math.random()*100)/2.1).toString()+"%"+")";
    let grey5 = "hsl"+"("+"50"+","+ "14"+"%" +","+ Math.floor((Math.random()*100)/2.3).toString()+"%"+")";
    let grey6 = "hsl"+"("+"50"+","+ "17"+"%" +","+ Math.floor((Math.random()*100)/2.5).toString()+"%"+")";
    let grey7 = "hsl"+"("+"50"+","+ "20"+"%" +","+ Math.floor((Math.random()*100)/2.7).toString()+"%"+")";
    let grey8 = "hsl"+"("+"50"+","+ "23"+"%" +","+ Math.floor((Math.random()*100)/3).toString()+"%"+")";

    liczba++;
    
   
    if(liczba>4) {
        przyciskLosuj.innerHTML="koniec gry";
        przyciskLosuj.removeEventListener('click', losujPalete);
    }
   
    //mainCard.style.backgroundImage= background[liczba];
    
    if(liczba ===0){
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
    }
    if(liczba ===1){
        los1.style.backgroundColor = red1;
        los2.style.backgroundColor = red2;
        los3.style.backgroundColor = red3;
        los4.style.backgroundColor = red4;
        los5.style.backgroundColor = red5;
        los6.style.backgroundColor = red6;
        los7.style.backgroundColor = red7;
        los8.style.backgroundColor = red8;

        let redPalete = [red1, red2, red3, red4, red5, red6, red7, red8];
        mainCard.style.backgroundColor = redPalete[Math.floor(Math.random()*8)];
    }
    if(liczba ===2){
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
    }
    if(liczba ===3){
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
    }
    if(liczba ===4){
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
    }

    
}
