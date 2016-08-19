console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("span").on("click", function print(event) {
    var span = $(this);
    span.addClass('span-active');
    var spanMake = $("<li>You Clicked: <span>" + $(".span-active").text() + "</span> at <span>" + Date.now() + "</li>");
    $("ul").append(spanMake);
    span.removeClass('span-active');
  });

})
