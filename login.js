function login_handler(fname, lname){
let person = JSON.parse(sessionStorage.getItem("person"));

if (
    person.firstName == fname ||
    person.lastName == lname ||
    person.firstName == fname ||
    person.lastName == lname)
     {
        window.location.href = ("../HTML/action.html")

} else {
        alert("Wrong Name or Password!");

}
}
