class About {
  constructor() {
    console.log('About page');
    this.setup();
  }

  setup() {
    //set body to opacity 1
    setTimeout(() => {
      this.body = document.querySelector('body');
      this.body.style.opacity = 1;
    }, 1000);

    //if we click on back-button we go back to the home page
    this.backButton = document.getElementById("back-button");
    this.shapesButton = document.getElementById("shapes-button");
    this.shapesOverlay = document.getElementById("shapes-overlay");

    this.backButton.addEventListener("click", () => {
      this.body.style.opacity = 0;
        setTimeout(() => {
            window.location.href = "home.html";
        }, 1500);
    });

    this.shapesButton.addEventListener("click", () => {
        this.shapesOverlay.style.opacity = 1;
        setTimeout(() => {
            window.location.href = "shapes.html";
        }, 1500);
    });

  }
}

const about = new About();