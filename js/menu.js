class Menu {
    constructor() {
        this.fadeInMenu();
        this.changeTexttoDefault();
       this.changeTextWhenHovered();
    }

    //beginning animation of menu-container, it is first hidden and then fades in
    fadeInMenu() {
        setTimeout(() => {
        const menuContainer = document.getElementById("menu-container");
        menuContainer.style.opacity = 1;
        }, 1000);
    }
    

    changeTexttoDefault() {
        //make sure text is turned back to default when not hovered
        const visualShape = document.querySelector(".visual-shape-svg");
        const readingShape = document.querySelector(".reading-shape-svg");
        const audioShape = document.querySelector(".audio-shape-svg");
        const titleDescription = document.getElementById("title-description");

        visualShape.addEventListener("mouseout", () => {
            titleDescription.innerHTML = "pick out the learning method <br> you want to start with";
        });

        readingShape.addEventListener("mouseout", () => {
            titleDescription.innerHTML = "pick out the learning method <br> you want to start with";
        });

        audioShape.addEventListener("mouseout", () => {
            titleDescription.innerHTML = "pick out the learning method <br> you want to start with";
        });
    }

    changeTextWhenHovered() {
        const visualShape = document.querySelector(".visual-shape-svg");
        const readingShape = document.querySelector(".reading-shape-svg");
        const audioShape = document.querySelector(".audio-shape-svg");
        const titleDescription = document.getElementById("title-description");

        visualShape.addEventListener("mouseover", () => {
            titleDescription.innerHTML = "you will learn to associate shapes and colors to certain key words while reading through your text.";
        });

        readingShape.addEventListener("mouseover", () => {
            titleDescription.innerHTML = "read through your text fast and further deepen your association between words and colors.";
        });

        audioShape.addEventListener("mouseover", () => {
            titleDescription.innerHTML = "connect your text to a melody and see how it changes shape!";
        });
    }
}

const menu = new Menu();