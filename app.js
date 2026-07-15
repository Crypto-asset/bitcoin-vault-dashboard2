/* ===================================
   Bitcoin Vault Dashboard
   Live BTC Portfolio Edition
=================================== */


/* ================================
   Portfolio Amount
================================ */

const portfolioBTC = 41.87;





/* ================================
   Particle Background
================================ */


const particleContainer =
document.querySelector("#particles");


if (particleContainer) {


    const particleCount = 45;


    for (let i = 0; i < particleCount; i++) {


        const particle =
        document.createElement("div");


        particle.className =
        "particle";


        particle.style.left =
        Math.random() * 100 + "%";


        particle.style.animationDuration =
        (5 + Math.random() * 10) + "s";


        particle.style.animationDelay =
        Math.random() * 5 + "s";


        particle.style.opacity =
        Math.random();


        particleContainer.appendChild(
            particle
        );


    }


}









/* ================================
   Live Bitcoin Price
================================ */


const walletValue =
document.querySelector("#walletValue");


const btcBalance =
document.querySelector("#btcBalance");


const btcPrice =
document.querySelector("#btcPrice");



async function updatePortfolio() {


try {


    // Show BTC amount

    if (btcBalance) {

        btcBalance.textContent =
        portfolioBTC.toFixed(2) + " BTC";

    }



    // Get live BTC price

    const response =
    await fetch(
        "https://api.coinbase.com/v2/prices/BTC-USD/spot"
    );



    const data =
    await response.json();



    const currentPrice =
    Number(data.data.amount);




    // Display BTC price

    if (btcPrice) {

        btcPrice.textContent =
        "$" + currentPrice.toLocaleString(
            undefined,
            {
                maximumFractionDigits:2
            }
        );

    }





    // Calculate portfolio value

    const totalValue =
    portfolioBTC * currentPrice;





    // Display portfolio value

    if (walletValue) {


        walletValue.classList.add(
            "live-update"
        );


        walletValue.textContent =
        "$" +
        totalValue.toLocaleString(
            undefined,
            {
                minimumFractionDigits:2,
                maximumFractionDigits:2
            }
        );



        setTimeout(() => {


            walletValue.classList.remove(
                "live-update"
            );


        },500);


    }



}


catch(error) {


    console.error(
        "BTC price error:",
        error
    );



    if(walletValue){

        walletValue.textContent =
        "Price unavailable";

    }



    if(btcPrice){

        btcPrice.textContent =
        "Unavailable";

    }


}


}





updatePortfolio();


setInterval(
updatePortfolio,
30000
);









/* ================================
   Toast
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


if(sync){


sync.textContent =
new Date().toLocaleString();


}


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



const animation =
setInterval(()=>{


score++;


security.textContent =
score + "%";



if(score >= target){


clearInterval(animation);


}



},18);



}









/* ================================
   Card Glow Effect
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
   Status Pulse
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
   Page Ready
================================ */


window.addEventListener(
"load",
()=>{


document.body.classList.add(
"ready"
);


});
