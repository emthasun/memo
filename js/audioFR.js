class Audio {
    constructor() {
        this.replayVideo();
        this.continueToMenu();
        
        
        setTimeout(() => {
            const phaseContainer = document.getElementById("phase-container");
            const playButton = document.getElementById("play");
            const home = document.getElementById("memo-logo");

            home.style.opacity = 1;
            playButton.style.opacity = 1;
            phaseContainer.style.opacity = 1;
            
            this.loadVideo();
          }, 1000);
    }

    //when id play is clicked, we will play the video with the id video
    //we will first create a function that loads the video first

    loadVideo() {
        const video = document.getElementById("video");
        video.src = "/public/AuditoryVideoFR.mp4";
        video.load();

        video.addEventListener("canplaythrough", () => {
            console.log("Video can play through");
            this.playVideo();
        });
    }

    //play the video
    playVideo() {
        //when clicking on the play button, the video will play
        const playButton = document.getElementById("play");
        playButton.addEventListener("click", () => {
            const video = document.getElementById("video");
            console.log("Playing video");
            video.play();

            playButton.style.opacity = 0;

            video.addEventListener("ended", () => {
                console.log("Video ended");
                video.style.opacity = "0";
                const replayButton = document.getElementById("replay");
                const continueButton = document.getElementById("continue");
                replayButton.style.opacity = "1";
                continueButton.style.opacity = "1";
            });
        });
    }
    
    replayVideo() {
        const replayButton = document.getElementById("replay");
        replayButton.addEventListener("click", () => {
            const video = document.getElementById("video");
            const playButton = document.getElementById("play");
            const continueButton = document.getElementById("continue");
            video.currentTime = 0;
            video.play();
            video.style.opacity = 1;
            replayButton.style.opacity = 0;
            playButton.style.opacity = 0;
            continueButton.style.opacity = 0;
        });
    }

    continueToMenu() {
        const continueButton = document.getElementById("continue");
        continueButton.addEventListener("click", () => {
            continueButton.style.opacity = 0;
            const replayButton = document.getElementById("replay");
            replayButton.style.opacity = 0;
            setTimeout(() => {
                window.location.href = "menuAudioFR.html";
            }, 1000);
        });
    }

}

const audio = new Audio();