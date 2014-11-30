// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function($){
  $("[data-goto]").on("click", function(evt){
    evt.preventDefault();

    var gotoId = $(this).attr("data-goto");
    var destination = $("#" + gotoId);
    $.scrollTo(destination, 600);
    return false;
  });
});