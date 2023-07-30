let person = JSON.parse(sessionStorage.getItem("person"));
let pic = document.getElementById("monster-hey");
let div = document.querySelector('h1');
let underText = document.querySelector('h3');

if (person.firstName == "" || person.lastName == "" || person.firstName == undefined || person.lastName == undefined) {
  div.innerText = "Hey there Traveller!\n I'm sorry, it seems as i did not catch your name!";
  underText.innerText = "Try again by clicking the button below";
  pic.src = "../images/sadmonster.png";
} else {
  div.innerText = "Hey there " + person.firstName + " " + person.lastName + "!\nWe're glad to see you joined our guild!";
  underText.innerText = "Click on the button below to discover your profile page!";
  pic.src = "../images/cutemonster.png";
}

function goBack() {
  window.location.href = ("../HTML/index.html");
}

function logout() {
  sessionStorage.clear();
}