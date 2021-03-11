const toPlContent = document.getElementById('pl');
const toEnContent = document.getElementById('en');
const firstCV = document.getElementById('en-container');
const overlay = document.getElementById('overlay');

//hide visibility for En version and remove pseudo container to make visible the Pl version
toPlContent.addEventListener('click', () => {
  firstCV.classList.add('en-hidden');
  overlay.classList.remove('overlay');
});
//add pseudo container and change visibility to come back to en version
toEnContent.addEventListener('click', () => {
  overlay.classList.add('overlay'); 
  firstCV.classList.remove('en-hidden');
});
    