const gift = document.getElementById("gift");
const openBtn = document.getElementById("openBtn");

const birthday = document.getElementById("birthday");
const giftArea = document.getElementById("giftArea");
const intro = document.getElementById("intro");

const confettiContainer =
    document.getElementById("confetti");

const wishBtn =
    document.getElementById("wishBtn");

const finalMessage =
    document.getElementById("finalMessage");


// ============================
// OPEN GIFT
// ============================

function openGift() {

    if (gift.classList.contains("opened")) {
        return;
    }


    // Shake first

    gift.classList.add("opening");


    setTimeout(() => {

        gift.classList.remove("opening");

        gift.classList.add("opened");

    }, 650);


    // Hide button

    openBtn.style.opacity = "0";

    openBtn.style.transform =
        "translateY(20px) scale(.8)";

    openBtn.style.pointerEvents =
        "none";


    // Create confetti

    setTimeout(() => {

        createConfetti(180);

    }, 500);


    // Hide intro

    setTimeout(() => {

        intro.style.opacity = "0";

        intro.style.transform =
            "translateY(-30px)";

    }, 700);


    // Show birthday

    setTimeout(() => {

        giftArea.style.display =
            "none";

        birthday.classList.add("show");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1600);

}


// Button

openBtn.addEventListener(
    "click",
    openGift
);


// Gift itself

gift.addEventListener(
    "click",
    openGift
);


// ============================
// CONFETTI
// ============================

function createConfetti(amount) {

    const shapes = [
        "square",
        "circle",
        "triangle"
    ];


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const piece =
            document.createElement("div");


        piece.classList.add(
            "confetti"
        );


        const randomLeft =
            Math.random() * 100;


        const randomDelay =
            Math.random() * 1.5;


        const randomDuration =
            3 + Math.random() * 4;


        const randomRotation =
            Math.random() * 360;


        const size =
            6 + Math.random() * 9;


        piece.style.left =
            randomLeft + "%";


        piece.style.width =
            size + "px";


        piece.style.height =
            size * 1.5 + "px";


        piece.style.animationDelay =
            randomDelay + "s";


        piece.style.animationDuration =
            randomDuration + "s";


        piece.style.transform =
            `rotate(${randomRotation}deg)`;


        // Random colors

        const colors = [
            "#ff4fa3",
            "#ffd84d",
            "#73d8ff",
            "#9c6cff",
            "#ffffff",
            "#ff7d5c",
            "#75ffb5"
        ];


        piece.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        // Random shape

        const shape =
            shapes[
                Math.floor(
                    Math.random() *
                    shapes.length
                )
            ];


        if (shape === "circle") {

            piece.style.borderRadius =
                "50%";

        }


        if (shape === "triangle") {

            piece.style.width = "0";

            piece.style.height = "0";

            piece.style.background =
                "transparent";

            piece.style.borderLeft =
                `${size / 2}px solid transparent`;

            piece.style.borderRight =
                `${size / 2}px solid transparent`;

            piece.style.borderBottom =
                `${size}px solid #ff4fa3`;

        }


        confettiContainer.appendChild(
            piece
        );


        // Remove after animation

        setTimeout(() => {

            piece.remove();

        }, 8000);

    }

}


// ============================
// MAKE A WISH
// ============================

wishBtn.addEventListener(
    "click",
    function () {

        if (
            wishBtn.classList.contains(
                "wished"
            )
        ) {
            return;
        }


        wishBtn.classList.add(
            "wished"
        );


        wishBtn.innerHTML =
            "✨ WISH SENT ✨";


        // Extinguish candles

        const flames =
            document.querySelectorAll(
                ".flame"
            );


        flames.forEach(
            flame => {

                flame.style.opacity =
                    "0";

                flame.style.transform =
                    "rotate(-45deg) scale(.2)";

            }
        );


        // Big confetti

        createConfetti(250);


        // Show final message

        setTimeout(() => {

            finalMessage.classList.add(
                "show"
            );

        }, 500);

    }
);


// ============================
// ADD EXTRA SPARKLES
// ============================

function createSparkle() {

    const sparkle =
        document.createElement("div");


    sparkle.innerHTML = "✦";


    sparkle.style.position =
        "fixed";


    sparkle.style.left =
        Math.random() * 100 + "%";


    sparkle.style.top =
        Math.random() * 100 + "%";


    sparkle.style.zIndex =
        "1";


    sparkle.style.pointerEvents =
        "none";


    sparkle.style.fontSize =
        8 + Math.random() * 14 + "px";


    sparkle.style.opacity =
        "0";


    sparkle.style.animation =
        "sparkleAppear 2s ease";


    document.body.appendChild(
        sparkle
    );


    setTimeout(() => {

        sparkle.remove();

    }, 2000);

}


// Create background sparkles

setInterval(
    createSparkle,
    700
);


// ============================
// KEYBOARD SUPPORT
// ============================

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            if (
                !gift.classList.contains(
                    "opened"
                )
            ) {

                openGift();

            }

        }

    }
);