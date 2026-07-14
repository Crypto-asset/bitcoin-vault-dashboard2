/* ===================================
   Bitcoin Vault Dashboard
   Milestone 2 JavaScript
=================================== */



/* ================================
   Animated BTC Counter
================================ */


const balanceElement = document.querySelector(".balance");


if (balanceElement) {


    const targetBalance = 41.87;

    let currentBalance = 0;


    const counter = setInterval(() => {


        currentBalance += 0.25;


        if (currentBalance >= targetBalance) {


            currentBalance = targetBalance;

            clearInterval(counter);


        }



        balanceElement.textContent =
            currentBalance.toFixed(2);



    }, 40);


}






/* ================================
   Copy Wallet + Toast
================================ */


const copyButton =
document.querySelector("#copyWallet");


const walletAddress =
document.querySelector("#walletAddress");


const toast =
document.querySelector("#toast");




function showToast(message) {


    if (!toast) return;


    toast.textContent = message;


    toast.classList.add("show");



    setTimeout(() => {


        toast.classList.remove("show");


    }, 2500);


}





if (copyButton && walletAddress) {



    copyButton.addEventListener(
        "click",
        async () => {



        try {


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



            setTimeout(() => {


                copyButton.textContent =
                    "Copy Wallet";


                copyButton.style.background =
                    "";


            },2000);



        }


        catch(error) {


            showToast(
                "Copy failed"
            );


        }



    });



}







/* ================================
   Dynamic Card Glow Effect
================================ */



const cards =
document.querySelectorAll(".card");



cards.forEach(card => {



    card.addEventListener(
        "mousemove",
        (event) => {



        const rect =
        card.getBoundingClientRect();



        const x =
        event.clientX - rect.left;



        const y =
        event.clientY - rect.top;



        card.style.background = `

        radial-gradient(

            circle at ${x}px ${y}px,

            rgba(255,183,0,0.20),

            rgba(255,255,255,0.08)

        )

        `;



    });





    card.addEventListener(
        "mouseleave",
        () => {


        card.style.background =
        "rgba(255,255,255,0.08)";


    });



});






/* ================================
   Blockchain Status Animation
================================ */


const status =
document.querySelector(".status");



if(status){


    setInterval(() => {


        status.style.opacity =
        status.style.opacity === "0.7"
        ? "1"
        : "0.7";



    },2000);


}







/* ================================
   Page Loaded Effect
================================ */


window.addEventListener(
"load",
()=>{


    document.body.classList.add(
        "loaded"
    );


});
