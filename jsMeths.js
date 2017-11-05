var obj = {
  name: "Ched",
  age: 36,
  isCool: true,
  friends: ["dill", "terry"],
  speak: function() {
    return "surfs up deewwds";
  }
}

var obj2 = {
  name: "Deck",
  age: 49,
  isCool: false,
  friends: ["Salami", "tillers"],
  speak: function() {
    return "I can recommend you a great vitamin";
  },
  //the function print uses data from obj2.friends, it refers to this data using this.friends
  print: function() {
    this.friends.forEach(function(element){
    console.log(element);
  })
  }
}

// can use this. to refer to the enclosing object and access data within the object