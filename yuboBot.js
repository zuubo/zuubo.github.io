function myFunction() {
  var getIn = document.querySelector("#txtIn").value;
  var forRbt = getIn.toLowerCase();
  
  switch (forRbt) {
    case "hi":
    case "hello":
    case "hey":
      alert("Hello, I am YuboBot. \n I am very glad to meet you!");
      break;
      
    case "how are you?":
    case "how are you":
      alert("I am well, thank you for asking! \n How are you?")
      break;
      
    case "good":
    case "i'm good":
    case "im good":
      alert("That is good to hear!");
      break;
      
    case "bad":
    case "i'm bad":
    case "im bad":
      alert("That's too bad, I hope you feel better soon.");
      break;
      
    default:
      alert("I do not understand what you're saying.");
  }
}