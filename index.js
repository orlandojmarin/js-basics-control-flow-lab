function scuberGreetingForFeet(distance) {
  if (distance > 2500) {
    return "No can do.";
  }
  else if (distance > 2000) {
    return "I will gladly take your thirty bucks.";
  }
  else if (distance <= 400) {
    return "This one is on me!";
  }
}

function ternaryCheckCity(cityName) {
  if (cityName === "NYC") {
    return "Ok, sounds good.";
  } else return "No go.";
}

function switchOnCharmFromTip(tipAmt) {
  if (tipAmt === "generous") {
    return "Thank you so much.";
  } 
  else if (tipAmt === "not as generous") {
    return "Thank you.";
  } 
  else return "Bye.";
}