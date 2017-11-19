$("#out").on("click", function(){
  $('div').fadeOut(1000, function() {
    console.log("fade completed");
  });
});

$("#in").on("click", function(){
  $('div').fadeIn(500, function(){
    console.log("slide completed");
  });
});

$("#tgl").on("click", function(){
  $('div').fadeToggle(500, function(){
    console.log("toggled tha fade")
  })
});

$("#slideout").on("click", function(){
  $("li").slideUp();
});

$("#slidein").on("click",function() {
    $("li").slideDown();
});