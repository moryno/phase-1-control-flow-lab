function scuberGreetingForFeet(someValue){
  // Write your code here!
  let message;
  if(someValue < 400){
    message = "This one is on me!"
  }
  else if(someValue > 2000 && someValue <= 2500) {
    message = 'I will gladly take your thirty bucks.'
  }
  else if(someValue > 2500) {
    message = 'No can do.'
  }
  return message
}

function ternaryCheckCity(city){
  let message;
  city === "NYC" ? message= "Ok, sounds good." : message = "No go."
  return message;
  // Write your code here!
  
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let message;
  switch (tip) {
    case tip = "generous":
      message = 'Thank you so much.';
      break;
    case tip = "not as generous":
      message = "Thank you.";
      break;
    
    default:
     message = "Bye.";
      break;
  }
  
  return message;
}