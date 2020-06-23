var mailList = ["tizio@gmail.com", "caio@gmail.com", "sempronio@gmail.com", 11, 02, 92]

var mail = prompt("Scrivi qui la tua mail");

console.log(mailList)
console.log(mail)

var mailFound = false;

for (var i = 0; i < mailList.length; i++) {

  var currentMail = mailList[i];

  if (mail == mailList[i]) {
    mailFound = true;
}

if (mailFound == true) {
  console.log("mail trovata");
}
else if (mailFound == false) {
  console.log("mail non trovata")
}
