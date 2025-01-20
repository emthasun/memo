class App {
  constructor() {
    setTimeout(() => {
      const scrollContainer = document.getElementById("scroll-container");
      const phaseContainer = document.getElementById("phase-container");
      const home = document.getElementById("memo-logo");

      home.style.opacity = 1;
      scrollContainer.style.opacity = 1;
      phaseContainer.style.opacity = 1;
    }, 1000);

    this.initializeScrollEvent();
    this.highlightOnHover();
    this.trackMouseMovement();
    this.replaceDivsWithShapes();
    this.blinkTexts();
  }

  initializeScrollEvent() {
    this.scrollContainer = document.getElementById("scroll-container");
    this.animatedTexts = Array.from({ length: 41 }, (_, i) =>
      document.getElementById(`animated-text-${i + 1}`)
    );
    this.keyPositions = Array.from({ length: 46 }, (_, i) => i * 1000);

    this.scrollContainer.addEventListener("scroll", () => {
      this.handleScroll();
      this.changeBackgroundGradient(); // Smoothly update background gradient
    });
  }

  highlightOnHover() {
    // Array of element IDs to be hovered over
    const colourWordsId = [
      "highlighted-text-3",
      "highlighted-text-7",
      "highlighted-text-15",
      "highlighted-text-17",
      "highlighted-text-20",
      "highlighted-text-26",
      "highlighted-text-37",
    ];

  
    //when hovering over any div with the id in the array, we will turn its opacity to 1
    colourWordsId.forEach((id) => {
      const element = document.getElementById(id);
      element.addEventListener("mouseover", () => {
        element.style.opacity = 1;
      });
      // element.addEventListener("mouseout", () => {
      //   element.style.opacity = 0;
      // });
    });
  }

  blinkTexts() {
    const shapeTexts = [
      "shape-text-1",
      "shape-text-5",
      "shape-text-11",
      "shape-text-18",
      "shape-text-24",
      "shape-text-28",
      "shape-text-32",
    ];

    shapeTexts.forEach((id) => {
      const element = document.getElementById(id);
      const intervalId = setInterval(() => {
        if (element.style.opacity === "1") {
          element.style.opacity = "0.2";
        } else {
          element.style.opacity = "1";
        }
      }, 500);

      element.addEventListener("click", () => {
        clearInterval(intervalId);
        element.style.opacity = "1"; // Ensure the element is visible after stopping the blink
      });
    });
  }

  handleScroll() {
    const scrollPosition = this.scrollContainer.scrollTop;

    this.animatedTexts.forEach((text, index) => {
      const startScroll = this.keyPositions[index];
      const endScroll = this.keyPositions[index + 1];

      // Animate into position
      if (startScroll !== undefined && endScroll !== undefined) {
        if (scrollPosition >= startScroll && scrollPosition <= endScroll) {
          const progress =
            (scrollPosition - startScroll) / (endScroll - startScroll);
          const offset = (1 - progress) * 100; // Move from left: -100vw to left: 50vw
          text.style.left = `calc(${offset}vw + 50vw)`;
        }
      }

      // Animate further left during the outgoing phase
      const outStartScroll = this.keyPositions[index + 5];
      const outEndScroll = this.keyPositions[index + 6];
      if (outStartScroll !== undefined && outEndScroll !== undefined) {
        if (
          scrollPosition >= outStartScroll &&
          scrollPosition <= outEndScroll
        ) {
          const progress =
            (scrollPosition - outStartScroll) / (outEndScroll - outStartScroll);
          const offset = 50 - progress * 150; // Move from left: 50vw to left: -100vw
          text.style.left = `calc(${offset}vw)`;
        }
      }
    });

    console.log(scrollPosition);

    //once scrollPosition is greater than 43400, we will redirect the user to the menu.html page
    if (scrollPosition > 43400) {
      window.location.href = "menuVisual.html";
    }
  }

  changeBackgroundGradient() {
    const backGroundColours = [
      "#ADFFB0",
      "#FFB861",
      "#FF8AFB",
      "#5387FF",
      "#FFD560",
      "#3FAFFF",
      "#CE64FF",
      "#ff71b8",
    ];
  
    const scrollPosition = this.scrollContainer.scrollTop;
  
    for (let i = 0; i < backGroundColours.length; i++) {
      const start = this.keyPositions[i * 5]; // Start of range
      const end = this.keyPositions[i * 5 + 5]; // End of range
  
      if (start !== undefined && end !== undefined) {
        if (scrollPosition >= start && scrollPosition < end) {
          // Update the body's background color
          document.body.style.backgroundColor = backGroundColours[i];
          break; // Exit the loop once the color is updated
        }
      }
    }
  }
  
  replaceDivsWithShapes() {
    const divIds = [
      "shape-text-1",
      "shape-text-5",
      "shape-text-11",
      "shape-text-18",
      "shape-text-24",
      "shape-text-28",
      "shape-text-32",
    ];

    const divTexts = [
      "SYNESTHESIA",
      "SENSE",
      "MUSIC",
      "EXPERIENCES",
      "SYNESTHETES",
      "SENSES",
      "SYNESTHESIA",
    ];

    const shapes = [
      "shape10.svg",
      "shape12.svg",
      "shape2.svg",
      "shape6.svg",
      "shape4.svg",
      "shape12.svg",
      "shape10.svg",
    ];

    const shapeColours = [
      "#ff1807", // Red
      "#3f21ff", // Blue
      "#71ff12", // Green
      "#ff34e7", // Pink
      "#ff9727", // Orange
      "#3f21ff", // Blue
      "#ff1807", // Red
    ];

    const shapeSizes = [
      "8vw", // shape10.svg
      "8vw", // shape12.svg
      "5vw", // shape2.svg
      "8vw", // shape6.svg
      "5vw", // shape4.svg
      "8vw", // shape12.svg
      "8vw", // shape10.svg
    ];

    divIds.forEach((id, index) => {
      const divElement = document.getElementById(id);
      if (divElement) {
        divElement.style.position = "relative";
        this.toggleTextAndShape(divElement, divTexts[index], shapes[index], shapeColours[index], shapeSizes[index]);
      } else {
        console.warn(`Element with ID "${id}" not found.`);
      }
    });
  }

  toggleTextAndShape(element, text, shape, shapeColour, shapeSize) {
    let isShape = false;

    element.addEventListener("click", async () => {
      if (isShape) {
        element.innerHTML = text;
        element.style.fontSize = "9vw";
        isShape = false;
      } else {
        element.style.fontSize = "1vw";
        element.style.top = "10vh";

        setTimeout(() => {
          element.style.top = "0vh";
        }, 100);

        setTimeout(async () => {
          const response = await fetch(`/public/shapes/${shape}`);
          if (!response.ok) {
            console.error(`Failed to fetch ${shape}`);
            return;
          }

          const svgText = await response.text();
          element.innerHTML = svgText;

          const svgElement = element.querySelector("svg");
          if (svgElement) {
            svgElement.style.position = "absolute";
            svgElement.style.top = "50%";
            svgElement.style.left = "50%";
            svgElement.style.transform = "translate(-50%, -50%)";
            svgElement.style.width = shapeSize;
            svgElement.style.height = "auto";

            svgElement.querySelectorAll("path, circle, rect, polygon").forEach((shape) => {
              shape.setAttribute("fill", shapeColour);
            });
          }
        }, 200);
        isShape = true;
      }
    });
  }

  //create a function that will reverse the shape back to the text
  reverseShapeToText(element, text) {
    element.addEventListener("click", () => {
      element.innerHTML = text;
      element.style.fontSize = "9vw";
    });
  }
  
  toggleTextAndShape(element, text, shape, shapeColour, shapeSize) {
    let isShape = false;

    element.addEventListener("click", async () => {
      if (isShape) {
        element.innerHTML = text;
        element.style.fontSize = "9vw";
        isShape = false;
      } else {
        element.style.fontSize = "1vw";
        element.style.top = "10vh";

        setTimeout(() => {
          element.style.top = "0vh";
        }, 100);

        setTimeout(async () => {
          const response = await fetch(`/public/shapes/${shape}`);
          if (!response.ok) {
            console.error(`Failed to fetch ${shape}`);
            return;
          }

          const svgText = await response.text();
          element.innerHTML = svgText;

          const svgElement = element.querySelector("svg");
          if (svgElement) {
            svgElement.style.position = "absolute";
            svgElement.style.top = "50%";
            svgElement.style.left = "50%";
            svgElement.style.transform = "translate(-50%, -50%)";
            svgElement.style.width = shapeSize;
            svgElement.style.height = "auto";

            svgElement.querySelectorAll("path, circle, rect, polygon").forEach((shape) => {
              shape.setAttribute("fill", shapeColour);
            });
          }
        }, 200);
        isShape = true;
      }
    });
  }

  replaceDivsWithShapes() {
    const divIds = [
      "shape-text-1",
      "shape-text-5",
      "shape-text-11",
      "shape-text-18",
      "shape-text-24",
      "shape-text-28",
      "shape-text-32",
    ];

    const divTexts = [
      "SYNESTHESIA",
      "SENSE",
      "MUSIC",
      "EXPERIENCES",
      "SYNESTHETES",
      "SENSES",
      "SYNESTHESIA",
    ];

    const shapes = [
      "shape10.svg",
      "shape12.svg",
      "shape2.svg",
      "shape6.svg",
      "shape4.svg",
      "shape12.svg",
      "shape10.svg",
    ];

    const shapeColours = [
      "#ff1807", // Red
      "#3f21ff", // Blue
      "#71ff12", // Green
      "#ff34e7", // Pink
      "#ff9727", // Orange
      "#3f21ff", // Blue
      "#ff1807", // Red
    ];

    const shapeSizes = [
      "8vw", // shape10.svg
      "8vw", // shape12.svg
      "5vw", // shape2.svg
      "8vw", // shape6.svg
      "5vw", // shape4.svg
      "8vw", // shape12.svg
      "8vw", // shape10.svg
    ];

    divIds.forEach((id, index) => {
      const divElement = document.getElementById(id);
      if (divElement) {
        divElement.style.position = "relative";
        this.toggleTextAndShape(divElement, divTexts[index], shapes[index], shapeColours[index], shapeSizes[index]);
      } else {
        console.warn(`Element with ID "${id}" not found.`);
      }
    });
  }

  trackMouseMovement() {
    const colourWordsId = [
      "highlighted-text-3",
      "highlighted-text-7",
      "highlighted-text-15",
      "highlighted-text-17",
      "highlighted-text-20",
      "highlighted-text-26",
      "highlighted-text-37",
    ];
    const elements = colourWordsId.map(id => document.getElementById(id));

    window.addEventListener("mousemove", (event) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const mouseX = event.clientX;
      const mouseY = event.clientY;

      // Calculate offset
      const offsetX = (centerX - mouseX) / centerX * 50; // 10px in opposite direction
      const offsetY = (centerY - mouseY) / centerY * 50;

      // Apply offset to elements
      elements.forEach((element) => {
        if (element) {
          element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        }
      });
    });
  }
}

// Initialize the app
const app = new App();
