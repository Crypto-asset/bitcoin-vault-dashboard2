/* ===================================
   Bitcoin Vault Dashboard
   Live BTC Portfolio USD + EUR Edition
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
   Portfolio Elements
================================ */


const walletValue =
document.querySelector("#walletValue");


const btcBalance =
document.querySelector("#btcBalance");


const btcPrice =
document.querySelector("#btcPrice");


const eurValue =
document.querySelector("#eurValue");









/* ================================
   Live BTC Price + Values
================================ */


async function updatePortfolio(){


try {



    if(btcBalance){

        btcBalance.textContent =
        portfolioBTC.toFixed(2) + " BTC";

    }






    let btcUSD;



    // First price source

    try {


        const priceResponse =
        await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
        );



        const priceData =
        await priceResponse.json();



        btcUSD =
        Number(priceData.bitcoin.usd);



    }


    catch(error){



        // Backup price source


        const backupResponse =
        await fetch(
        "https://api.coinbase.com/v2/prices/BTC-USD/spot"
        );



        const backupData =
        await backupResponse.json();



        btcUSD =
        Number(backupData.data.amount);



    }






    // BTC price display


    if(btcPrice){


        btcPrice.textContent =
        "$" +
        btcUSD.toLocaleString(
            undefined,
            {
                maximumFractionDigits:2
            }
        );


    }






    // EUR conversion


    const eurResponse =
    await fetch(
    "https://api.frankfurter.app/latest?from=USD&to=EUR"
    );



    const eurData =
    await eurResponse.json();



    const exchangeRate =
    eurData.rates.EUR;








    // Calculate values


    const totalUSD =
    portfolioBTC * btcUSD;



    const totalEUR =
    totalUSD * exchangeRate;








    // USD value


    if(walletValue){


        walletValue.textContent =
        "$" +
        totalUSD.toLocaleString(
            undefined,
            {
                minimumFractionDigits:2,
                maximumFractionDigits:2
            }
        );


    }








    // EUR value


    if(eurValue){


        eurValue.textContent =
        "€" +
        totalEUR.toLocaleString(
            undefined,
            {
                minimumFractionDigits:2,
                maximumFractionDigits:2
            }
        );


    }




}


catch(error){


console.error(
"Portfolio error:",
error
);



if(walletValue){

walletValue.textContent =
"Unavailable";

}



if(btcPrice){

btcPrice.textContent =
"Unavailable";

}



if(eurValue){

eurValue.textContent =
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



const securityAnimation =
setInterval(()=>{


score++;


security.textContent =
score + "%";



if(score >= target){


clearInterval(
securityAnimation
);


}



},18);


}









/* ================================
   Card Glow
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
