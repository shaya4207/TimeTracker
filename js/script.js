$(document).ready(function() {
  var interval;
  $("#start,#continue").on('click',function() {
    $("#start,#continue,#save").css('display','none');
    $("#pause").css('display','inline-block');
    interval = setInterval(addSeconds, 1000);
  });

  $("#pause").on('click',function() {
    clearInterval(interval);
    $("#continue,#save").css('display','inline-block');
    $("#pause").css('display','none');
  });

  $("#clear").on('click',function() {
    clearInterval(interval);
    $("#start").css('display','inline-block');
    $("#pause,#continue,#save").css('display','none');
    $("#hours,#minutes,#seconds").text(pad(00));
  });
});

function pad(n) {
  if (n < 10)
    return "0" + n;
  return n;
};

function addSeconds() {
  var hours = $("#hours");
  var minutes = $("#minutes");
  var seconds = $("#seconds");

  if(parseInt(seconds.text() ,10) < 59) {
    var newSeconds = parseInt(seconds.text() ,10) + 1;
  } else {
    var newSeconds = 00;
    if(parseInt(minutes.text() ,10) < 59) {
      var newMinutes = parseInt(minutes.text() ,10) + 1;
    } else {
      var newMinutes = 00;
      var newHours = parseInt(hours.text() ,10) + 1;
    }
  };

  seconds.text(pad(newSeconds));
  minutes.text(pad(newMinutes));
  hours.text(pad(newHours));
}