class Reading {
  constructor() {
    this.text = [
      "NOTRE", "CONCEPT", "DE", "DESIGN", "AMÈNE", "LA", "FASCINATION", "DES", "JARDINS", "BOTANIQUES", "DIRECTEMENT", "DANS", "LA", "VITRINE", ".", "L’ARRIÈRE-PLAN", "ÉVOQUE", "LES", "FAÇADES", "VITRÉES", "DÉLICATES", "DES", "SERRES", "HISTORIQUES", ",", "CRÉANT", "UNE", "ATMOSPHÈRE", "SEREINE", "ET", "LUMINEUSE", ".", "AVEC", "DES", "PLANTES", "EXOTIQUES", ",", "DES", "FLEURS", "PASTEL", "ET", "DES", "ACCENTS", "COMME", "DES", "INSECTS", "OU", "DES", "OISEAUX", ",", "NOUS", "INSTAURONS", "UNE", "SENSATION", "VIVANTE", "DE", "PRINTEMPS", "."
    ];

    this.specialStyles = {
      6: 'flashText-1', // fascination
      13: 'flashText-2', // vitrine
      18: 'flashText-3', // façades
      22: 'flashText-9', // serres
      28: 'flashText-4', // sereine
      34: 'flashText-5', // pastel
      42: 'flashText-6', // accents
      48: 'flashText-7', // oiseaux
      56: 'flashText-8', // printemps
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
        window.location.href = 'menuReadingOwn.html';
      }, 1000);
    });
  }
}

const reading = new Reading();
