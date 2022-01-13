

var count = 0;

// document.getElementById('output').innerHTML = '1235'

$(".digit").on('click', function() {
  let num = ($(this).clone().children().remove().end().text());
//   console.log(num);
  if (count < 11) {
    $("#output").append('<span>' + num.trim() + '</span>');
    count++;
  }
});

$('.fa-long-arrow-left').on('click', function() {
  $('#output span:last-child').remove();
  count--;
});