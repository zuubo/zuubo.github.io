var myName = document.querySelector("#titleName");
var lis = document.querySelectorAll("li");
var heelo = document.querySelector("#heelo");
var counter = 63;

myName.addEventListener("click", function() {
  this.style.fontSize = Number(counter*=1.3) + "px";  
}); 

heelo.addEventListener("click", function(){
  counter = 63;
  myName.style.fontSize = counter + "px";
})

myName.addEventListener("mouseover", function(){
  this.classList.add("red"); 
});

myName.addEventListener("mouseout", function(){
  this.classList.remove("red");
});

for (var i = 0; i < lis.length; i++){
  lis[i].addEventListener("mouseover", function(){
    this.classList.add("selected");
  });
  lis[i].addEventListener("mouseout", function(){
    this.classList.remove("selected");
  });
  lis[i].addEventListener("click", function(){
    this.classList.toggle("done");
  });
}