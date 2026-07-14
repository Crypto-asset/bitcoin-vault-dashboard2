/* ===================================
   Bitcoin Vault Dashboard
   Milestone 1 - Basic Interactions
=================================== */


// ================================
// Wallet Copy Function
// ================================

const copyButton = document.querySelector("#copyWallet");
const walletAddress = document.querySelector("#walletAddress");


if (copyButton && walletAddress) {

    copyButton.addEventListener("click", async () => {

        try {

            await navigator.clipboard.writeText(
                walletAddress.textContent
            );


            const originalText = copyButton.textContent;


            copyButton.textContent = "Copied ✓";


            copyButton.classList.add("copied");


            setTimeout(() => {

                copyButton.textContent = originalText;

                copyButton.classList.remove("copied");

            }, 2000);


        } catch(error) {

            console.error(
                "Copy failed:",
                error
            );

        }

    });

}



// ================================
// Blockchain Connection Status
// ================================

const statusBadge = document.querySelector(".status");


if(statusBadge){

    statusBadge.addEventListener(
        "click",
        () => {

            statusBadge.innerHTML = `
                <span class="status-dot"></span>
                Blockchain Connected
            `;

        }
    );

}



// ================================
// Button Hover Enhancement
// ================================

const buttons = document.querySelectorAll(".btn");


buttons.forEach(button => {


    button.addEventListener(
        "mouseenter",
        () => {

            button.style.transform =
            "translateY(-3px)";

        }
    );


    button.addEventListener(
        "mouseleave",
        () => {

            button.style.transform =
            "translateY(0)";

        }
    );


});



// ================================
// Dashboard Loading Effect
// ================================

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "loaded"
        );

    }
);
