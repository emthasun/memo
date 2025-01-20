class Home {
  constructor() {
    console.log('Home constructor');
    this.clickAbout();
    this.clickShapes();
    this.hoverStart();
    this.clickStart();
    this.clickEN();
    this.body = document.querySelector('body');
    setTimeout(() => {
    this.body.style.opacity = 1;
    }, 1000);
  }

  clickEN() {
    const enButton = document.getElementById('en-button-fr');
    enButton.addEventListener('click', () => {
    this.body.style.opacity = 0;
    setTimeout(() => {
      window.location.href = 'home.html';
    }, 1000);
    });
  }

  clickAbout() {
    const aboutButton = document.getElementById('about-button');
    aboutButton.addEventListener('click', () => {
    this.body.style.opacity = 0;
    setTimeout(() => {
      window.location.href = 'aboutFR.html';
    }, 1000);
    });
}

clickShapes() {
  const shapesButton = document.getElementById("shapes-button");
  const shapesOverlay = document.getElementById("shapes-overlay");
  shapesButton.addEventListener("click", () => {
    setTimeout(() => {
    shapesOverlay.style.opacity = 1;
    }, 500);
    setTimeout(() => {
      window.location.href = "shapesFR.html";
    }, 1500);
  });
}

hoverStart() {
    //when hovering over the button with the id start-button, the shape-container will change its width and height to 80vh
    const startButton = document.getElementById('start-button');
    const shapeContainer = document.getElementById('shape-container');
    startButton.addEventListener('mouseover', () => {
      shapeContainer.style.width = '75vh';
      shapeContainer.style.height = '75vh';
    });
    startButton.addEventListener('mouseout', () => {
      shapeContainer.style.width = '90vh';
      shapeContainer.style.height = '90vh';
    });
}

clickStart () {
  //when clicking on the start-button, the mode-container will at first appear, 500ms later we will redirect to the mode.html page
  const startButton = document.getElementById('start-button');
  const modeContainer = document.getElementById('mode-container');
  startButton.addEventListener('click', () => {
    modeContainer.style.opacity = 1;
    setTimeout(() => {
      window.location.href = 'modeFR.html';
    }, 1000);
  });
}
}

const home = new Home();