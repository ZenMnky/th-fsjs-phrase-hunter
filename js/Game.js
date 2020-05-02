/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game{
     constructor() {
         this.missed = 0;
         this.phrases = this.createPhrases();
         this.activePhrase = null;
    }

    /**
     * Creates phrases for use in game
     * @return {array} An array of phrases that could be used in the game
     */
    createPhrases() {
        return [
            new Phrase(`Dont get trouble in your mind`),
            new Phrase(`Your burrito is getting loose`),
            new Phrase(`This too shall pass`),
            new Phrase(`Death before dishonor`),
            new Phrase(`Always point the muzzle in a safe direction`)
            ];

    }
    
    /**
     * Selects random phrase from phrases property
     * @return {object} Phrase object chosen to be used
     */
    getRandomPhrase() {
        let num = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[num];           
    }
    
          
}