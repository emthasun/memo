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
            titleDescription.innerHTML = "choisir la méthode d'apprentissage <br>avec laquelle vous voulez commencer";
        });

        readingShape.addEventListener("mouseout", () => {
            titleDescription.innerHTML = "choisir la méthode d'apprentissage <br>avec laquelle vous voulez commencer";
        });

        audioShape.addEventListener("mouseout", () => {
            titleDescription.innerHTML = "choisir la méthode d'apprentissage <br>avec laquelle vous voulez commencer";
        });
    }

    changeTextWhenHovered() {
        const visualShape = document.querySelector(".visual-shape-svg");
        const readingShape = document.querySelector(".reading-shape-svg");
        const audioShape = document.querySelector(".audio-shape-svg");
        const titleDescription = document.getElementById("title-description");

        visualShape.addEventListener("mouseover", () => {
            titleDescription.innerHTML = "vous apprendrez à associer des formes et des couleurs à certains mots clés tout en lisant votre texte.";
        });

        readingShape.addEventListener("mouseover", () => {
            titleDescription.innerHTML = "lisez rapidement votre texte et approfondissez l'association entre les mots et les couleurs.";
        });

        audioShape.addEventListener("mouseover", () => {
            titleDescription.innerHTML = "Reliez votre texte à une mélodie et voyez comment il se transforme !";
        });
    }
}

const menu = new Menu();