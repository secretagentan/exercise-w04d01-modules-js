function toPig(string) {

  var arrayOfStrings = [];

  // SEPARATES STRING OF WORDS AND RETURNS IN AN ARRAY
  function splitString(string, separator) {
    arrayOfStrings = string.split(separator);
    // console.log(arrayOfStrings);
    return arrayOfStrings;
  }
  splitString(string, " ");

  // PIG LATIN-IZE EACH STRING ELEMENT IN ARRAY
  function pigEach() {
    // console.log(arrayOfStrings);

    // DO THIS FOR EACH ITEM IN ARRAY
    for (var i = 0; i < arrayOfStrings.length; i++) {
      // TAKE THE FIRST LETTER OF EACH STRING
      arrayOfStrings[i] = arrayOfStrings[i].charAt(0);
      console.log(arrayOfStrings[i]);

      // IF FIRST LETTER OF WORD IS NOT A VOWEL



    }

    // REMOVE THE FIRST LETTER

    // ADD FIRST LETTER TO END OF STRING

    // ADD "AY" TO THE END

    // RETURN THE NEW STRING

    // PUSH NEW STRINGS INTO NEW ARRAY

  }
  pigEach();

  // COMBINE PIG LATIN-IZED STRINGS INTO SENTENCE
  function pigLatin() {
    // FOR EACH ELEMENT IN NEW ARRAY


    // CONCATENATE INTO A NEW PIG LATIN SENTENCE


  }

};
toPig("hello world");
