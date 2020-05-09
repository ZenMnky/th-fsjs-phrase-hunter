/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase){
         //phrase: this is the actual phrase the Phrase object is representing. This property should be set to the phrase parameter, but converted to all lower case.
            this.phrase = phrase;
    }

    /**
     * Display phrase on game board
     * adds letter placeholders to the display when the game starts
     * 
     */
    addPhraseToDisplay() {
        const phraseDiv = document.querySelector('div#phrase ul');
        
        let selectedPhrase = game.activePhrase['phrase'];
        let phraseAsArray = selectedPhrase.split("");
        
        phraseAsArray.forEach(value => {
            let newLi = document.createElement('li');
            let isLetter = new RegExp('[a-z]', 'i');
            let isWhitespace = new RegExp(' ');
            
            newLi.innerText = value;
            newLi.classList.add('hidden');
            if (isLetter.test(value)){
                newLi.classList.add('letter');
                newLi.classList.add(value.toLowerCase());
            } else if (isWhitespace.test(value)){
                newLi.classList.add('space');
            }
            
            
            phraseDiv.appendChild(newLi);
        });
    }

    /**
    * Checks if passed letter is in phrase
    * @param {string} letter - Letter to check
    * @returns {boolean} If letter is present, return true
    */
    checkLetter(letter) {
        return (game.activePhrase.phrase.toLowerCase().indexOf(letter) >= 0) ? true : false;
    } ;

    /**
    * Displays passed letter on screen after a match is found
    * @param {string} letter - Letter to display
    */
    showMatchedLetter(letter) { 
        const phraseItems = document.querySelector('div#phrase ul').childNodes;
        phraseItems.forEach(item => {
            if (item.classList.contains(letter)) {
                item.classList.toggle('hidden');
                item.classList.toggle('show');
            }
        })

    } ;
 }