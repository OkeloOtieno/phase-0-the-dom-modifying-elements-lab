// Write your code here!
const mainElement = document.querySelector('main#main');

if (mainElement) {
  mainElement.parentNode.removeChild(mainElement); 
}
const newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.innerHTML = "Okelo is the champion"; 

