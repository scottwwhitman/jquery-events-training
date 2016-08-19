console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

  $(".add").on("change", function calculate(event) {
    var left = +$('#left').val();
    var right = +$('#right').val();
    var sum = left + right;
    $('#total').val(sum);
  });
  var r= $('<input type="button" value="Clear board"/>');
  $("body").append(r);
  $('button').on('click', function reset(event) {
    $('#left')[0].reset();
    $('#right')[0].reset();
    $('#total')[0].reset();
  })
})
