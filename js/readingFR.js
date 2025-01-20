class Reading {
  constructor() {
    this.text = [
      "LE", "CYBORG", "EST", "UN", "ORGANISME", "CYBERNÉTIQUE", ",", "HYBRIDE", "DE", "MACHINE", "ET", "DE", "VIVANT", ",", "CRÉATURE", "DE", "LA", "RÉALITÉ", 
      "SOCIALE", "COMME", "PERSONNAGE", "DE", "ROMAN", ".", "LA", "RÉALITÉ", "SOCIALE", "EST", "LE", "VÉCU", "DES", "RELATIONS", ",", "NOTRE", "CONSTRUCTION", 
      "POLITIQUE", "LA", "PLUS", "IMPORTANTE", ",", "UNE", "FICTION", "QUI", "CHANGE", "LE", "MONDE", ".", "LES", "DIVERS", "MOUVEMENTS", "FÉMINISTES", 
      "INTERNATIONAUX", "ONT", "AUTANT", "CONSTRUIT", "“L’EXPÉRIENCE", "DES", "FEMMES”", "QU’ILS", "ONT", "FAIT", "ÉMERGER", "OU", "FAIT", "LA", "DÉCOUVERTE", 
      "DE", "CET", "OBJET", "COLLECTIF", "CRUCIAL", "."
    ];

    this.specialStyles = {
      1: 'flashText-1', // cyborg
      5: 'flashText-2', // cybernétique
      14: 'flashText-3', // créature
      22: 'flashText-4', // roman
      31: 'flashText-5', // relations
      35: 'flashText-6', // politique
      41: 'flashText-7', // fiction
      50: 'flashText-8', // féministes
      57: 'flashText-9' // femmes
    };

    setTimeout(() => {
      const phaseContainer = document.getElementById("phase-container");
      const textRead = document.getElementById("text-read");
      const flashText = document.getElementById("flashText");
      const home = document.getElementById("memo-logo");

      home.style.opacity = 1;
      textRead.style.opacity = 1;
      flashText.style.opacity = 1;
      phaseContainer.style.opacity = 1;
      
      this.rsvp();
    }, 1000);

    this.speed = 400; // Speed of the text in milliseconds
    this.replay();
    this.continueToMenu();
  }

  rsvp() {
    let i = 0;
    const intervalId = setInterval(() => {
      const flashTextElement = document.getElementById('flashText');
      const textReadElement = document.getElementById('text-read');

      if (i < this.text.length) {
        let formattedWord = this.text[i];
        
        // Add specific class if the index has a special style
        if (this.specialStyles[i]) {
          const styleClass = this.specialStyles[i];
          const smallClass = `${styleClass}-small`; // Append '-small' to the class name
          formattedWord = `<span class="${smallClass}">${formattedWord}</span>`;
          flashTextElement.innerHTML = `<span class="${styleClass}">${this.text[i]}</span>`;
          flashTextElement.style.fontSize = '7vw';

          // Remove the style after a delay so the effect is temporary
          setTimeout(() => {
            flashTextElement.className = '';
            flashTextElement.style.fontSize = '12vw';
          }, this.speed-10);
        } else {
          flashTextElement.innerHTML = formattedWord;
        }

        textReadElement.innerHTML += formattedWord + ' ';
        i++;
      } else {
        clearInterval(intervalId);
        setTimeout(() => {
        textReadElement.style.opacity = 0; 
        flashTextElement.style.opacity = 0;
        const continueButton = document.getElementById('continue');
        const replayButton = document.getElementById('replay');
        continueButton.style.opacity = 1;
        replayButton.style.opacity = 1;
        },2000);
      }
    }, this.speed);
  }

  replay() {
    const replayButton = document.getElementById('replay');
    replayButton.addEventListener('click', () => {
      const continueButton = document.getElementById('continue');
      const textReadElement = document.getElementById('text-read');
      const flashTextElement = document.getElementById('flashText');
      replayButton.style.opacity = 0;
      continueButton.style.opacity = 0;
      setTimeout(() => { 
        textReadElement.style.opacity = 1; 
        flashTextElement.style.opacity = 1;
        textReadElement.innerHTML = '';
        this.rsvp();
      }, 1000);
    });
  }

  continueToMenu() {
    const continueButton = document.getElementById('continue');
    continueButton.addEventListener('click', () => {
      continueButton.style.opacity = 0;
      const replayButton = document.getElementById('replay');
      replayButton.style.opacity = 0;
      setTimeout(() => {
        window.location.href = 'menuReadingFR.html';
      }, 1000);
    });
  }
}

const reading = new Reading();
