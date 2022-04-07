$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss"));
$("#6am .box").val(localStorage.getItem("6am"));
$("#7am .box").val(localStorage.getItem("7am"));
$("#8am .box").val(localStorage.getItem("8am"));
$("#9am .box").val(localStorage.getItem("9am"));
$("#10am .box").val(localStorage.getItem("10am"));
$("#11am .box").val(localStorage.getItem("11am"));
$("#12pm .box").val(localStorage.getItem("12pm"));
$("#1pm .box").val(localStorage.getItem("1pm"));
$("#2pm .box").val(localStorage.getItem("2pm"));
$("#3pm .box").val(localStorage.getItem("3pm"));
$("#4pm .box").val(localStorage.getItem("4pm"));
$("#5pm .box").val(localStorage.getItem("5pm"));
$("#6pm .box").val(localStorage.getItem("6pm"));

$(".saveBtn").on("click", function() {
    var textBox = $(this).siblings(".box").val();
    var amPm = $(this).parent().attr("id");
    localStorage.setItem(amPm, textBox);
})