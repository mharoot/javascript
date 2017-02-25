class WordGenerator {


   constructor(max_word_size) {
      this.max_word_size = max_word_size; // creates max_word_size property // ill do 14 in gameController.js for mobile viewing reasons.
      this.dictionary = ['cows', 'tracks', 'arrived', 'located', 'sir', 'seat',
               'division', 'effect', 'underline', 'view', 'annual',
               'anniversary', 'centennial', 'millennium', 'perennial',
               'artisan', 'apprentice', 'meteorologist', 'blizzard', 'tornado'];
      this.word = '';
   }



   displayMaxWordSize() {
      // regular method
      console.log("Max Word Size: " + this.max_word_size);
   }

   get getWord() {
       return this.word;
   }
   get generateWord() {
       var max = this.dictionary.length;
       var min = 0;
       while( this.word.length == 0 || this.word.length > this.max_word_size ) {
           var index = Math.floor(Math.random() * (max - min)) + min; // pick a random integer between dictionary[0..N]
           this.word = this.dictionary[index];
       }

       return this.word;
       
   }

   get maxWordSize() {
      // getter method but retrieved as a property ex: other.js code --> console.log(wg.maxWordSize); // retrieved like a property
      return this.max_word_size;
   }
}
