console.log("Sanity Check: JS is working!");

var rick_roll_youtube_embed_code = "<iframe width='420' height='315' src='https://www.youtube.com/embed/dQw4w9WgXcQ' frameborder='0' allowfullscreen></iframe>";

$(document).ready(function(){

  $("#time").text( Date.now() );

  $("form").on("click", function handleClick(event){
    event.preventDefault();
    var $newForm = $('<form action="https://www.youtube.com/watch" method="GET"><input name="v" value="dQw4w9WgXcQ" hidden><input type="submit"></form>');
    $('body').append($newForm);
  });
})
