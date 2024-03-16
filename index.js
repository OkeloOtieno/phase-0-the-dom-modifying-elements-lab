// Write your code here!
const mainElement = document.querySelector('main#main');

if (mainElement) {
  mainElement.parentNode.removeChild(mainElement); 
}
const newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.textContent = "Okelo is the champion"; 

