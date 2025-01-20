class OwnText {
    constructor() {
        this.setInitialButtonColors();
        this.homeButton();
        this.init();
        this.clickEnter();
        this.clickConfirm();
    }

    init() {
        //set big-container-body to opacity 1 after 0.5 seconds
        const bigContainerBody = document.getElementById("big-container-body");
        const bigContainerBody2 = document.getElementById("big-container-body2");
        const bigContainerBody3 = document.getElementById("big-container-body3");

        bigContainerBody2.style.display = "none";
        bigContainerBody3.style.display = "none";

        if (bigContainerBody) {
            setTimeout(() => {
                bigContainerBody.style.opacity = 1;
            }, 500);
        }
    }

    clickEnter() {
        //when clicking on the enter-button, we change the opacity of the big-container-body to 0 and change the opacity of big-container-body2 to 1
        const enterButton = document.getElementById("enter-button");
        const bigContainerBody = document.getElementById("big-container-body");
        const bigContainerBody2 = document.getElementById("big-container-body2");

        if (enterButton) {
            enterButton.addEventListener("click", () => {
                bigContainerBody.style.opacity = 0;
                bigContainerBody2.style.display = "flex";
                setTimeout(() => {
                    bigContainerBody.style.display = "none";
                    bigContainerBody2.style.opacity = 1;
                }, 500);
            });
        }
    }

    clickConfirm() {
        //when clicking on the confirm-button, we change the opacity of the big-container-body2 to 0 and change the opacity of the big-container-body3 to 1
        const confirmButton = document.getElementById("enter-button-2");
        const bigContainerBody2 = document.getElementById("big-container-body2");
        const bigContainerBody3 = document.getElementById("big-container-body3");

        if (confirmButton) {
            confirmButton.addEventListener("click", () => {
                bigContainerBody2.style.opacity = 0;
                bigContainerBody3.style.display = "flex";
                setTimeout(() => {
                    bigContainerBody3.style.opacity = 1;
                    bigContainerBody2.style.display = "none";
                }, 500);
            });
        }
    }

    homeButton() {
        const home = document.getElementById("memo-logo");
        const homeOverlay = document.getElementById("home-overlay");

        if (home) {
            home.addEventListener("click", () => {
                console.log("click");
                if (homeOverlay) {
                    setTimeout(() => {
                       homeOverlay.style.opacity = 1;
                    }, 1000);
                    setTimeout(() => {
                        window.location.href = "home.html";
                    }, 1500);
                }
            });
        }
    }

    setInitialButtonColors() {
        const goalButton1 = document.getElementById("goal-button1");
        const goalButton2 = document.getElementById("goal-button2");
        const goalButton3 = document.getElementById("goal-button3");

        goalButton1.style.backgroundColor = "white";
        goalButton2.style.backgroundColor = "white";
        goalButton3.style.backgroundColor = "white";
        goalButton1.style.filter = "filter: drop-shadow(0px 2px 3px #3b3b3b33)";
        goalButton2.style.filter = "filter: drop-shadow(0px 2px 3px #3b3b3b33)";
        goalButton3.style.filter = "filter: drop-shadow(0px 2px 3px #3b3b3b33)";
        this.goalButtons();
    }

    goalButtons() {
        //if we click on a div with the id goal-button1, goal-button2 or goal-button3, we change its background-color to     background-color: rgb(203, 203, 203);
        //and when we click a second time it goes back to white
        const goalButton1 = document.getElementById("goal-button1");
        const goalButton2 = document.getElementById("goal-button2");
        const goalButton3 = document.getElementById("goal-button3");

        goalButton1.addEventListener("click", () => {
            console.log("click");
            if (goalButton1.style.backgroundColor === "white") {
                goalButton1.style.backgroundColor = "rgb(203, 203, 203)";
                goalButton1.style.filter = "filter: drop-shadow(0px 2px 3pxrgba(59, 59, 59, 0))";
            } else {
                goalButton1.style.backgroundColor = "white";
                goalButton1.style.filter = "filter: drop-shadow(0px 2px 3px #3b3b3b33)";
            }
        });

        goalButton2.addEventListener("click", () => {
            if (goalButton2.style.backgroundColor === "white") {
                goalButton2.style.backgroundColor = "rgb(203, 203, 203)";
                goalButton2.style.filter = "filter: drop-shadow(0px 2px 3pxrgba(59, 59, 59, 0))";
            } else {
                goalButton2.style.backgroundColor = "white";
                goalButton2.style.filter = "filter: drop-shadow(0px 2px 3px #3b3b3b33)";
            }
        });

        goalButton3.addEventListener("click", () => {
            if (goalButton3.style.backgroundColor === "white") {
                goalButton3.style.backgroundColor = "rgb(203, 203, 203)";
                goalButton3.style.filter = "filter: drop-shadow(0px 2px 3pxrgba(59, 59, 59, 0))";
            } else {
                goalButton3.style.backgroundColor = "white";
                goalButton3.style.filter = "filter: drop-shadow(0px 2px 3px #3b3b3b33)";
            }
        });
    }
}

const ownText = new OwnText();