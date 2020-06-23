
document.getElementById("btn").addEventListener("click", function(){

  var dice1 = Math.floor(Math.random() * 6 + 1);
  var dice2 = Math.floor(Math.random() * 6 + 1);


  document.getElementById("firstDice").innerHTML = dice1;
  document.getElementById("secondDice").innerHTML = dice2;


  if (dice1 > dice2) {
    alert("Hai sconfitto il grande Cesare!");
  } else if (dice2 > dice1){
    alert("Hai perso, stupido barbaro!");
  } else{
    alert("Pareggio. Sei un degno avversario!");
  }

})
