/*

  The main function to convert,
  which calls the helper functions
  to convert (manually or cheatingly)

*/

var cssDefault = `
  height: 150px;
  width: 150px;
  color: white;
  text-align: center;
  vertical-align: middle;
  background-color: #a0b;
  border: 1px solid black;
`;

function updateBorderRadius(event){

  event.preventDefault();

  let topLeftValue = document.getElementById('top-left-radius-input').value;
  let topRightValue = document.getElementById('top-right-radius-input').value;
  let btmLeftValue = document.getElementById('bottom-left-radius-input').value;
  let btmRightValue = document.getElementById('bottom-right-radius-input').value;

  let cssString = 'border-radius: ' + topLeftValue + 'px ' + topRightValue + 'px ' + btmRightValue + 'px ' + btmLeftValue + 'px; ';

  //console.log(cssString);
  cssString = cssDefault + cssString;

  let resultsDiv = document.getElementById('border-preview-div');
  resultsDiv.setAttribute('style', cssString);

  let resultsSpan = document.getElementById('result-span');
  resultsSpan.innerHTML = cssString;

  console.log('Ended function');
  return false;
}
