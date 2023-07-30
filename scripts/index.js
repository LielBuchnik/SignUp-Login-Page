// FLAT
// function submit_handler(){
//   sessionStorage.setItem("name","Liel Buchnik");
//   console.log(sessionStorage.getItem("name"));
// }

// function submit_handler(fname, lname){
//   fname = document.getElementById('fname').value;
//   lname = document.getElementById('lname').value;
//   if(fname.value == null || lname.value == null || fname.value == undefined || lname.value == undefined){
//     fname = "Unknown"
//     lname = "Traveller"
//     let person = fname + " " + lname;
//     sessionStorage.setItem("user", person)
//   }else(fname.value != null || lname.value != null || fname.value != undefined || lname.value != undefined){
//   let person = fname + " " + lname;
//   sessionStorage.setItem("user", person)
//   console.log(" It Worked");}
// }


// Stringfy JSON

function submit_handler(fname, lname) {

  let personObj = {
    firstName: fname,
    lastName: lname
  }
  sessionStorage.setItem("person", JSON.stringify(personObj));
  console.log(personObj);

  if (personObj.firstName == "" || personObj.lastName == "" || personObj.firstName == undefined || personObj.lastName == undefined) {
    window.location.href = ("../HTML/action.html");
    console.log("Failed Login");
  } else {
    window.location.href = ("../HTML/login.html");
    console.log("Succeeded Login");
  }
}
