class General {
    constructor() {
        this.init();
        this.togglePageVisual();
        this.togglePageReading();
        this.togglePageAudio();
        this.toggleVisualMenu();
        this.toggleReadingMenu();
        this.toggleAudioMenu();
    }

    init() {
        this.toggleMenu();
    }

    toggleMenu() {
        const home = document.getElementById("memo-logo");
        const loadingPageVisual = document.getElementById("loading-page-visual");
        const loadingShapes = document.getElementById("loading-shapes-visual");
        const homeOverlay = document.getElementById("home-overlay");

        if (home) {
            home.addEventListener("click", () => {
                console.log("click");

                if (loadingPageVisual && loadingShapes) {
                    loadingPageVisual.style.opacity = 1;
                    loadingShapes.style.opacity = 1;
                    setTimeout(() => {
                        loadingShapes.style.opacity = 0;
                        home.style.opacity = 0;
                    }, 3000);
                    setTimeout(() => {
                        window.location.href = "homeOwn.html";
                    }, 3500);
                } else if (homeOverlay) {
                
                        homeOverlay.style.opacity = 1;
                        setTimeout(() => {
                            window.location.href = "homeOwn.html";
                        }, 1500);
                }
            });
        }
    }

    togglePageVisual() {
        const visualButton = document.getElementById("visual-phase");

        if (visualButton) {
            visualButton.addEventListener("click", () => {
                console.log("visual-loading");
                const loadingPageVisual = document.getElementById("loading-page-visual");
                const loadingShapes = document.getElementById("loading-shapes-visual");

                if (loadingPageVisual && loadingShapes) {
                    loadingPageVisual.style.opacity = 1;
                    loadingShapes.style.opacity = 1;
                    setTimeout(() => {
                        loadingShapes.style.opacity = 0;
                    }, 3000);
                    setTimeout(() => {
                        window.location.href = "visualOwn.html";
                    }, 3500);
                }
            });
        }
    }

    togglePageReading() {
        const readingButton = document.getElementById("reading-phase");

        if (readingButton) {
            readingButton.addEventListener("click", () => {
                console.log("reading-loading");
                const loadingPageReading = document.getElementById("loading-page-reading");
                const loadingShapes = document.getElementById("loading-shapes-reading");

                if (loadingPageReading && loadingShapes) {
                    loadingPageReading.style.opacity = 1;
                    loadingShapes.style.opacity = 1;
                    setTimeout(() => {
                        loadingShapes.style.opacity = 0;
                    }, 3000);
                    setTimeout(() => {
                        window.location.href = "readingOwn.html";
                    }, 3500);
                }
            });
        }
    }

    togglePageAudio() {
        const audioButton = document.getElementById("audio-phase");

        if (audioButton) {
            audioButton.addEventListener("click", () => {
                console.log("audio-loading");
                const loadingPageAudio = document.getElementById("loading-page-audio");
                const loadingShapes = document.getElementById("loading-shapes-audio");

                if (loadingPageAudio && loadingShapes) {
                    loadingPageAudio.style.opacity = 1;
                    loadingShapes.style.opacity = 1;
                    setTimeout(() => {
                        loadingShapes.style.opacity = 0;
                    }, 3000);
                    setTimeout(() => {
                        window.location.href = "audioOwn.html";
                    }, 3500);
                }
            });
        }
    }

    toggleVisualMenu() {
        const visualShape = document.getElementById("visual-shape");

        if (visualShape) {
            visualShape.addEventListener("click", () => {
                const loadingPageVisual = document.getElementById("loading-page-visual");
                const loadingShapes = document.getElementById("loading-shapes-visual");

                if (loadingPageVisual && loadingShapes) {
                    loadingPageVisual.style.opacity = 1;
                    loadingShapes.style.opacity = 1;
                    setTimeout(() => {
                        loadingShapes.style.opacity = 0;
                    }, 3000);
                    setTimeout(() => {
                        window.location.href = "visualOwn.html";
                    }, 3500);
                }
            });
        }
    }

    toggleReadingMenu() {
        const readingShape = document.querySelector(".reading-shape-svg");

        if (readingShape) {
            readingShape.addEventListener("click", () => {
                console.log("reading-loading");
                const loadingPageReading = document.getElementById("loading-page-reading");
                const loadingShapes = document.getElementById("loading-shapes-reading");

                if (loadingPageReading && loadingShapes) {
                    loadingPageReading.style.opacity = 1;
                    loadingShapes.style.opacity = 1;
                    setTimeout(() => {
                        loadingShapes.style.opacity = 0;
                    }, 3000);
                    setTimeout(() => {
                        window.location.href = "readingOwn.html";
                    }, 3500);
                }
            });
        }
    }

    toggleAudioMenu() {
        const audioShape = document.querySelector(".audio-shape-svg");

        if (audioShape) {
            audioShape.addEventListener("click", () => {
                console.log("audio-loading");
                const loadingPageAudio = document.getElementById("loading-page-audio");
                const loadingShapes = document.getElementById("loading-shapes-audio");

                if (loadingPageAudio && loadingShapes) {
                    loadingPageAudio.style.opacity = 1;
                    loadingShapes.style.opacity = 1;
                    setTimeout(() => {
                        loadingShapes.style.opacity = 0;
                    }, 3000);
                    setTimeout(() => {
                        window.location.href = "audioOwn.html";
                    }, 3500);
                }
            });
        }
    }
}

const general = new General();
