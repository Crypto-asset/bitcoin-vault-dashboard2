/* ===================================
   Bitcoin Vault Dashboard
   Milestone 2
=================================== */


/* ================================
   Animated BTC Counter
================================ */

const balanceElement =
document.querySelector(".balance");


if(balanceElement){

    const target = 41.87;

    let current = 0;


    const counter =
    setInterval(()=>{


        current += 0.15;


        if(current >= target){

            current = target;

            clearInterval(counter);

        }


        balanceElement.innerHTML =
        current.toFixed(2);


    },30);

}



/* ================================
   Wallet Copy + Toast
================================ */


const copyButton =
document.querySelector("#copyWallet");


const walletAddress =
document.querySelector("#walletAddress");


const toast =
document.querySelector("#toast");



function showToast(message){

    if(!toast) return;


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
async ()=>{


try{


await navigator.clipboard.writeText(
walletAddress.textContent
);



copyButton.textContent =
"Copied ✓";


copyButton.style.background =
"#00c853";



showToast(
"Wallet address copied"
);



setTimeout(()=>{


copyButton.textContent =
"Copy Wallet";


copyButton.style.background =
"";


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
   Card Hover Glow
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



card.style.background =
`
radial-gradient(
circle at ${x}px ${y}px,
rgba(255,183,0,.18),
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
