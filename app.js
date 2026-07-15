/* ===================================
   Bitcoin Vault Dashboard
   Live Blockchain Wallet Edition
=================================== */


/* ================================
   Wallet Configuration
================================ */

const walletAddress =
"bc1qamgjuxaywqls56h7rg7afga3m6rgqwfkew688k";





/* ================================
   Particle Background
================================ */


const particleContainer =
document.querySelector("#particles");


if(particleContainer){

const particleCount = 45;


for(let i = 0; i < particleCount; i++){

const particle =
document.createElement("div");


particle.className =
"particle";


particle.style.left =
Math.random()*100+"%";


particle.style.animationDuration =
(5 + Math.random()*10)+"s";


particle.style.animationDelay =
Math.random()*5+"s";


particle.style.opacity =
Math.random();


particleContainer.appendChild(particle);

}

}






/* ================================
   Live Bitcoin Wallet Data
================================ */


const walletValue =
document.querySelector("#walletValue");


const btcBalance =
document.querySelector("#btcBalance");


const btcPrice =
document.querySelector("#btcPrice");




async function updateWallet(){


try{


// Get blockchain balance

const balanceResponse =
await fetch(
`https://blockchain.info/q/addressbalance/${walletAddress}`
);


const balanceSatoshi =
await balanceResponse.json();



const btc =
balanceSatoshi / 100000000;



btcBalance.textContent =
btc.toFixed(8) + " BTC";



// Get BTC price

const priceResponse =
await fetch(
"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
);


const priceData =
await priceResponse.json();



const price =
priceData.bitcoin.usd;



btcPrice.textContent =
"$" + price.toLocaleString();



const value =
btc * price;



walletValue.classList.add(
"live-update"
);



walletValue.textContent =
"$" + value.toLocaleString(
undefined,
{
minimumFractionDigits:2,
maximumFractionDigits:2
}
);



setTimeout(()=>{

walletValue.classList.remove(
"live-update"
);

},500);



}

catch(error){


console.error(
"Wallet update error:",
error
);



btcBalance.textContent =
"Unavailable";


btcPrice.textContent =
"Unavailable";


walletValue.textContent =
"Error";


}

}





updateWallet();


setInterval(
updateWallet,
30000
);









/* ================================
   Toast System
================================ */


const toast =
document.querySelector("#toast");


function showToast(message){


if(!toast)
return;



toast.textContent =
message;



toast.classList.add(
"show"
);



setTimeout(()=>{


toast.classList.remove(
"show"
);


},2500);


}









/* ================================
   Copy Wallet
================================ */


const copyButton =
document.querySelector("#copyWallet");


const wallet =
document.querySelector("#walletAddress");



if(copyButton && wallet){


copyButton.addEventListener(
"click",
async()=>{


try{


await navigator.clipboard.writeText(
wallet.textContent
);



copyButton.textContent =
"Copied ✓";


showToast(
"Wallet address copied"
);



setTimeout(()=>{


copyButton.textContent =
"Copy Wallet";


},2000);



}


catch(error){


showToast(
"Copy failed"
);


}



});


}









/* ================================
   Synchronization Time
================================ */


const sync =
document.querySelector("#syncTime");



function updateTime(){


if(!sync)
return;



sync.textContent =
new Date().toLocaleString();


}



updateTime();


setInterval(
updateTime,
60000
);









/* ================================
   Security Score
================================ */


const security =
document.querySelector(".security");


if(security){


let score = 0;


const target = 98;



const securityAnimation =
setInterval(()=>{


score++;


security.textContent =
score+"%";



if(score >= target){


clearInterval(
securityAnimation
);


}



},18);



}









/* ================================
   Premium Card Glow
================================ */


const cards =
document.querySelectorAll(".card");



cards.forEach(card=>{


card.addEventListener(
"mousemove",
(e)=>{


const rect =
card.getBoundingClientRect();


const x =
e.clientX - rect.left;


const y =
e.clientY - rect.top;



card.style.background = `

radial-gradient(

circle at ${x}px ${y}px,

rgba(255,183,0,.22),

rgba(255,255,255,.08)

)

`;



});




card.addEventListener(
"mouseleave",
()=>{


card.style.background =
"rgba(255,255,255,.08)";


});


});









/* ================================
   Blockchain Status Pulse
================================ */


const status =
document.querySelector(".status");


if(status){


setInterval(()=>{


status.style.transform =
"scale(1.03)";



setTimeout(()=>{


status.style.transform =
"scale(1)";


},300);



},3000);


}








/* ================================
   Page Loaded
================================ */


window.addEventListener(
"load",
()=>{


document.body.classList.add(
"ready"
);


});
