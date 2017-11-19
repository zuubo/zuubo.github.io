/*global $*/
// check off specific todos by clicking
$("ul").on("click", "li", function(){ // selected the ul initially because the selector needs to select and existing element, selects the ul BUT code only runs when li is clicked
  $(this).toggleClass("completed");
})

// click on X to delete the todo
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(400, function(){ //this selector refers to the parent of the span, which is the list item
    $(this).remove(); //refers to the list item too
  });
  event.stopPropagation(); //stops the click from triggering the list event (toggling the completed class)
})

$("input[type='text']").keypress(function(event){
  if(event.which === 13){ //keycode for enter
  // grab new todo from the text input
    var todoText = $(this).val();
  // clear the text input field  
    $(this).val("");
  // create a new li from the text input
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li");
  }
});

$(".fa-archive").click(function(){
  $("input[type='text']").fadeToggle(300);
})
