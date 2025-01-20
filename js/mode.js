class Mode {
    constructor() {
        this.setup();
        this.clickExample();
        this.clickOwn();
        this.homeButton();

        const textShapes = document.querySelectorAll("#textShape-container");
        const shapeExample = document.getElementById("shape-example");
        const shapeOwn = document.getElementById("shape-own");
        setTimeout(() => {
        textShapes.forEach(textShape => {
            textShape.style.opacity = 1;
        });
        shapeExample.style.opacity = 1;
        shapeOwn.style.opacity = 1;
        }, 500);
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

    setup() {
        const exampleButton = document.getElementById("example-button");
        const ownButton = document.getElementById("own-button");
        const exampleOverlay = document.getElementById("example-overlay");
        const ownOverlay = document.getElementById("own-overlay");

        //if we click on example-button, we show the example overlay and then redirect to the menu.html page (but delayed so that the overlay can be seen)
        exampleButton.addEventListener("click", () => {
            exampleOverlay.style.opacity = 1;
            setTimeout(() => {
                window.location.href = "menu.html";
            }, 2000);
        });

        //same for own-button
        ownButton.addEventListener("click", () => {
            ownOverlay.style.opacity = 1;
            setTimeout(() => {
                window.location.href = "ownText.html";
            }, 2000);
        });
    }

    clickExample() {
        const exampleButton = document.getElementById("example-button");
        const exampleOverlay = document.getElementById("example-overlay");

        exampleButton.addEventListener("click", () => {
            exampleOverlay.style.opacity = 1;
            setTimeout(() => {
                window.location.href = "menu.html";
            }, 2000);
        });
    }

    clickOwn() {
        const ownButton = document.getElementById("own-button");
        const ownOverlay = document.getElementById("own-overlay");

        ownButton.addEventListener("click", () => {
            ownOverlay.style.opacity = 1;
            setTimeout(() => {
                window.location.href = "ownText.html";
            }, 2000);
        });
    }
}

const mode = new Mode();