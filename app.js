/* ===================================
   Bitcoin Vault Dashboard
   Milestone 3 JavaScript
=================================== */



/* ================================
   Animated BTC Counter
================================ */


const balanceElement =
document.querySelector(".balance");


if(balanceElement){


    const target =
    41.87;


    let current =
    0;



    const timer =
    setInterval(()=>{


        current += 0.25;



        if(current >= target){


            current =
            target;


            clearInterval(timer);


        }



        balanceElement.textContent =
        current.toFixed(2);



    },40);



}






/* ================================
   Wallet Copy System
================================ */


const copyButton =
document.querySelector("#copyWallet");


const walletAddress =
document.querySelector("#walletAddress");


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





if(copyButton && walletAddress){


copyButton.addEventListener(
"click",
async()=>{


try{


await navigator.clipboard.writeText(
walletAddress.textContent
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


const syncTime =
document.querySelector("#syncTime");



if(syncTime){


function updateSync(){


const now =
new Date();



syncTime.textContent =
now.toLocaleString();



}



updateSync();


setInterval(
updateSync,
60000
);



}






/* ================================
   Security Score Animation
================================ */


const security =
document.querySelector(".security");



if(security){


let score =
0;


const target =
98;



const securityTimer =
setInterval(()=>{


score++;



security.textContent =
score + "%";



if(score >= target){


clearInterval(
securityTimer
);


}



},20);



}








/* ================================
   Statistics Counter Animation
================================ */


const statistics =
document.querySelectorAll(
".stats strong"
);



statistics.forEach(item=>{


item.style.transition =
"0.5s";


item.addEventListener(
"mouseenter",
()=>{


item.style.transform =
"scale(1.08)";


});


item.addEventListener(
"mouseleave",
()=>{


item.style.transform =
"scale(1)";


});


});








/* ================================
   Card Dynamic Glow
================================ */


const cards =
document.querySelectorAll(
".card"
);



cards.forEach(card=>{


card.addEventListener(
"mousemove",
(event)=>{


const rect =
card.getBoundingClientRect();



const x =
event.clientX -
rect.left;



const y =
event.clientY -
rect.top;



card.style.background = `

radial-gradient(

circle at ${x}px ${y}px,

rgba(255,183,0,.20),

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
   Blockchain Pulse
================================ */


const status =
document.querySelector(".status");



if(status){


setInterval(()=>{


status.style.opacity =
status.style.opacity === "0.6"
?
"1"
:
"0.6";



},2000);



}








/* ================================
   Page Ready
================================ */


window.addEventListener(
"load",
()=>{


document.body.classList.add(
"loaded"
);


});
