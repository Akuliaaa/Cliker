const klik = document.getElementById("klik");
const balance = document.getElementById("balance");
const magazin = document.getElementById("magazin");
const magazinauto = document.getElementById("magazinauto");
const karta = document.getElementById("karta");
const buy1 = document.getElementById("buy");
const buy2 = document.getElementById("buy2");
const buy3 = document.getElementById("buy3");
const krest = document.getElementById("krest");
const krest1 = document.getElementById("krest1");
const krest2 = document.getElementById("krest2");
const color = document.getElementsByClassName("color");
const kliki = document.getElementById("kliki");
const autokliki = document.getElementById("autokliki");
const messange = document.getElementById("message");
const pole = document.getElementById("pole");
const pets = document.getElementById("pets");
const block = document.getElementById("keyis")
const blockKeyis = document.getElementById("blockKeyis")
const blockKeyis1 = document.getElementById("blockKeyis1")
const krest3 = document.getElementById("krest3");
const text = document.getElementById("text");
const text1 = document.getElementById("text1");
var num = getRandom(101);
var plus = 1;
var auto = 0; 

pole.addEventListener("click", () => {
messange.style = "opacity: 1; visibility: visible;";
setTimeout(function(){
    document.getElementById('message').style = "opacity: 0; visibility: hidden;";
}, 700);
});
klik.addEventListener("click", () => {
    balance.innerHTML = Number(balance.innerHTML) + plus;
});
buy1.addEventListener("click", ()=> {
    magazin.style = "opacity: 1; visibility: visible;";
});
buy2.addEventListener("click", () => {
	magazinauto.style = "opacity: 1; visibility: visible;";
});
buy3.addEventListener("click", () => {
	karta.style = "opacity: 1; visibility: visible;";
});
krest.addEventListener("click", ()=> {
    magazin.style = "opacity: 0; visibility: hidden;";
});
krest1.addEventListener("click", ()=> {
    magazinauto.style = "opacity: 0; visibility: hidden;";
});
krest2.addEventListener("click", ()=> {
    karta.style = "opacity: 0; visibility: hidden;";
});
color[0].addEventListener("click", () => {
    if (Number(balance.innerHTML) >= 200){
        plus +=1; 
        balance.innerHTML -=200; 
		kliki.innerHTML =  Number(kliki.innerHTML)+1;
    }
});
color[1].addEventListener("click", () => {
    if (Number(balance.innerHTML) >= 1000){
        plus +=5; 
        balance.innerHTML -=1000; 
		kliki.innerHTML = Number(kliki.innerHTML)+5;
    }
});
color[2].addEventListener("click", () => {
    if (Number(balance.innerHTML) >= 2000){
        plus +=10; 
        balance.innerHTML -=2000; 
		kliki.innerHTML = Number(kliki.innerHTML)+10;
    }
});
color[3].addEventListener("click", () => { 
    if (Number(balance.innerHTML) >= 3000){
        plus +=15;
        balance.innerHTML -=3000; 
		kliki.innerHTML = Number(kliki.innerHTML)+15;
    }
});
color[4].addEventListener("click", () => { 
    if (Number(balance.innerHTML) >= 6000){
        plus +=30;
        balance.innerHTML -=6000; 
		kliki.innerHTML = Number(kliki.innerHTML)+30;
    }
});
color[5].addEventListener("click", () => {
    if (Number(balance.innerHTML) >= 15000){
        plus +=50; 
        balance.innerHTML -=15000; 
		kliki.innerHTML = Number(kliki.innerHTML)+50;
    }
});
color[6].addEventListener("click", () => {
    if (Number(balance.innerHTML) >= 30000){
        plus +=100; 
        balance.innerHTML -=30000; 
		kliki.innerHTML = Number(kliki.innerHTML)+100;
    }
});
color[7].addEventListener("click", () => {
    if (Number(balance.innerHTML) >= 10){
    auto +=1;
    balance.innerHTML -=10;
    autokliki.innerHTML =  Number(autokliki.innerHTML)+1;
    }
});
color[8].addEventListener("click", () => {
    if (Number(balance.innerHTML) >= 7500){
    auto +=5;
    balance.innerHTML -=7500;
    autokliki.innerHTML =  Number(autokliki.innerHTML)+5;
    }
});
color[9].addEventListener("click", () => {
    if (Number(balance.innerHTML) >= 10500){
    auto +=10;
    balance.innerHTML -=10500;
    autokliki.innerHTML =  Number(autokliki.innerHTML)+10;
    }
});
color[10].addEventListener("click", () => {
    if (Number(balance.innerHTML) >= 17500){
    auto +=15;
    balance.innerHTML -=17500;
    autokliki.innerHTML =  Number(autokliki.innerHTML)+15;
    }
});
color[11].addEventListener("click", () => {
    if (Number(balance.innerHTML) >= 33000){
    auto +=30;
    balance.innerHTML -=33000;
    autokliki.innerHTML =  Number(autokliki.innerHTML)+30;
    }
});
color[12].addEventListener("click", () => {
    if (Number(balance.innerHTML) >= 75000){
    auto +=50;
    balance.innerHTML -=75000;
    autokliki.innerHTML =  Number(autokliki.innerHTML)+50;
    }
});
color[13].addEventListener("click", () => {
    if (Number(balance.innerHTML) >= 150000){
    auto +=100;
    balance.innerHTML -=150000;
    autokliki.innerHTML =  Number(autokliki.innerHTML)+100;
    }
});
setInterval(() => {
    balance.innerHTML = Number(balance.innerHTML) + auto;
},2000);
pets.addEventListener("click", () => {
    block.style = "opacity: 1; visibility: visible;";
});
krest3.addEventListener("click", ()=> {
    block.style = "opacity: 0; visibility: hidden;"
});
function getRandom(max) {
    return Math.floor(Math.random()*max);
}
blockKeyis.addEventListener("click", () => {
    var num = getRandom(101);
    if (Number(balance.innerHTML) >= 5000){
        text.style = "transform: scale(2);";
        setTimeout(() => {
            text.style = "transform: scale(1);";
        }, 1000);
        balance.innerHTML -=5000;
        if (num >= 90) {
            text.innerHTML = "баланс +15000";
            balance.innerHTML = Number(balance.innerHTML) + 15000;
            return
        }
        if (num >= 70 && num <90) {
            text.innerHTML = "баланс +2500";
            balance.innerHTML = Number(balance.innerHTML) + 2500;
            return
        }
        if (num >= 60 && num <70) {
            text.innerHTML = "баланс +750";
            balance.innerHTML = Number(balance.innerHTML) + 750;
            return
        }
        else {
            text.innerHTML = "Не повезло";
            return
        }
    }
})
blockKeyis1.addEventListener("click", () =>{
    var num = getRandom(101);
    if (Number(balance.innerHTML) >= 15000){
        text.style = "transform: scale(2);";
        setTimeout(() => {
            text.style = "transform: scale(1);";
        }, 1000);
        balance.innerHTML -=15000;
        if (num >= 90) {
            text1.innerHTML = "баланс -100000 спасибо за игру =)";
            balance.innerHTML = Number(balance.innerHTML) -100000;
            return
        }
        if (num >= 70 && num <90) {
            text1.innerHTML = "баланс +20000";
            balance.innerHTML = Number(balance.innerHTML) +20000;
            return
        }
        if (num >= 60 && num <70) {
            text1.innerHTML = "баланс +10000";
            balance.innerHTML = Number(balance.innerHTML) +10000;
            return
        }
        else {
            text1.innerHTML = "баланс +5000";
            balance.innerHTML = Number(balance.innerHTML) +5000;
            return
        }
    }
})