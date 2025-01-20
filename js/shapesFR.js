class Shapes {
  constructor() {
    this.container = document.getElementById("container");
    this.shapes = document.querySelectorAll("svg");
    this.angle = 0;
    this.currentSpeed = 0.4;
    this.defaultSpeed = 0.4;
    this.minSpeed = 0.001;
    this.deceleration = 0.97;
    this.acceleration = 1.03;
    this.isRotating = true;
    this.isHovering = false;
    this.animationFrameId = null;
    this.setup();
    this.setupEventListeners();
    this.animate();
    this.changeShapeText();
  }

setup() {
    document.body.style.opacity = 1;
    this.arrangeShapes();

    //if we click on back-button we go back to the home page
    this.backButton = document.getElementById("back-button");
    this.aboutButton = document.getElementById("about-button");
    this.homeOverlay = document.getElementById("home-overlay");

    this.backButton.addEventListener("click", () => {
        this.homeOverlay.style.opacity = 1;
        setTimeout(() => {
            window.location.href = "homeFR.html";
        }, 1500);
    });

    this.aboutButton.addEventListener("click", () => {
        this.homeOverlay.style.opacity = 1;
        setTimeout(() => {
            window.location.href = "aboutFR.html";
        }, 1500);
    });
}

  arrangeShapes() {
    const radius = 300;
    const numberOfShapes = this.shapes.length;
    this.shapes.forEach((shape, index) => {
      const theta = (index / numberOfShapes) * 2 * Math.PI;
      const x = radius * Math.cos(theta);
      const y = radius * Math.sin(theta);
      shape.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
    });
  }

  setupEventListeners() {
    this.shapes.forEach((shape) => {
      shape.addEventListener("mouseenter", () => {
        this.isHovering = true;
      });
      shape.addEventListener("mouseleave", () => {
        this.isHovering = false;
      });
    });
  }

  animate() {
    this.adjustSpeed();
    this.angle += this.currentSpeed;
    this.container.style.transform = `rotate(${this.angle}deg)`;
    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }

  adjustSpeed() {
    if (this.isHovering && this.currentSpeed > this.minSpeed) {
      this.currentSpeed *= this.deceleration;
    } else if (!this.isHovering && this.currentSpeed < this.defaultSpeed) {
      this.currentSpeed *= this.acceleration;
    }
  }

  //function that changes shape-text based on the shape we hovered over
  changeShapeText() {
    this.shapes.forEach((shape) => {
      shape.addEventListener("mouseenter", () => {
        const shapeText = document.getElementById("shape-text");
        if (shape.id === "cyborg-shape") {
          shapeText.innerHTML = "cyborg";
        } else if (shape.id === "machine-shape") {
          shapeText.innerHTML = "machine";
        } else if (shape.id === "roman-shape") {
          shapeText.innerHTML = "roman";
        } else if (shape.id === "construction-shape") {
          shapeText.innerHTML = "construction";
        } else if (shape.id === "feministes-shape") {
          shapeText.innerHTML = "féministes";
        } else if (shape.id === "experience-shape") {
          shapeText.innerHTML = "expérience";
        } else if (shape.id === "decouverte-shape") {
          shapeText.innerHTML = "découverte";
        }
      });

      shape.addEventListener("mouseleave", () => {
        const shapeText = document.getElementById("shape-text");
        shapeText.innerHTML = "vos formes";
      });
    });
  }
}

const shapes = new Shapes();
