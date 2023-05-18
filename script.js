//Display timer and date
var currentDay = dayjs().format("dddd, MMMM D");
$("#currentDay").text(currentDay);

//click function to retrieve data entered and store
$(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var eventText = $(this).siblings(".description").val();
    localStorage.setItem(time, eventText);
  });

 
  // when information is submitted, this function will save and persist data
$(".time-block").each(function () {
  var time = $(this).attr("id");
  var savedEvent = localStorage.getItem(time);
  if (savedEvent !== null) {
    $(this).children(".description").val(savedEvent);
  }

  
  var blockHour = parseInt(time.split('-')[1]) 
  var cuurent = dayjs().hour()
  // blockHour less than current -> PAST
  // blockhour equalt to current -> Present
  // else -> future

  if (blockHour < cuurent) {
    $(this).addClass('past')

  }
else if (blockHour === cuurent) {
  $(this).addClass('present')
}
else {
$(this).addClass('future')
}
});

