
Template.buildingBlocks.onRendered(function(){
$(document).ready(function() {
  $("#accordion section h1").click(function(e) {
    //$(this).parents().siblings("section").addClass("ac_hidden");
    $(this).parents("section").toggleClass("ac_hidden");

    e.preventDefault();
  });
});
});

