const tab = document.getElementsByClassName("tab");
const tabContent = document.getElementsByClassName("tabcontent");
let tabLenght = tab.length;

function openContent(evt, contentName) {
  for (i = 0; i < tabLenght; i++) {
    tabContent[i].style.display = "none";
    tab[i].className = tab[i].className.replace(" active", "");
  }

  document.getElementById(contentName).style.display = "block";
  evt.currentTarget.className += " active";
}
