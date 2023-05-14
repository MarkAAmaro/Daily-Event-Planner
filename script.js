//Display timer and date
var currentDay = dayjs().format("dddd, MMMM D");
$("#currentDay").text(currentDay);

//click function to retrieve data entered and store
$(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var eventText = $(this).siblings(".description").val();
    localStorage.setItem(time, eventText);
  });