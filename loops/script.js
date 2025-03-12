let Username = "";
let textField = document.getElementById("text");

while(Username === "" || Username === null){
  Username = window.prompt("Input your Username?");
}
let firstLetter = Username.charAt(0).toUpperCase();
let lastname = Username.slice(1).toLowerCase();
let fullName = firstLetter + lastname;
textField.innerHTML = `Welcome ${fullName}`;