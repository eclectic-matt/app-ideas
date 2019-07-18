/*

  The main function to convert,
  which calls the helper functions
  to convert (manually or cheatingly)

*/

function convertBinToDec(event){

  event.preventDefault();

  let inputValue = document.getElementById('bin2decInput').value;
  //console.log(inputValue);

  let resultEl = document.getElementById('resultSpan');
  resultEl.innerHTML = '';

  // Notify if anything other than 0 or 1 entered
  for (let i = 0; i < inputValue.length; i++){
    thisChar = inputValue.substring(i,i+1);
    console.log(thisChar);
    if ( (thisChar !== '0') && (thisChar !== '1') ){
      console.error('Non-binary character entered!');
      resultEl.innerHTML = 'Non-binary character entered!';
      return false;
    }
  }

  // Simple (cheat) version
  // let resultValue = parseIntConvert(inputValue);

  // Manual (bit by bit) version
  let resultValue = manualConvert(inputValue);

  resultEl.innerHTML = resultValue;

  console.log('Ended function');
  return false;
}
