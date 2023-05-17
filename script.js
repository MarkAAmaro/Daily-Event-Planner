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
});