const hourListHour = $("#hourList").children().data("hour");
const hourListText = $("#hourList").children().children("textarea");
const hourListDiv = $("#hourList").children();
const saveButton = $(".saveBtn");
$(function () {
  // Sets date on header to current day
  $("#currentDay").text(dayjs().format("dddd, MMMM DD"));

  hourListDiv.each(function () {
    //Checks if there is a description saved in localstorage corresponding to the hour
    // If yes, changes description to the value
    if (localStorage.getItem($(this).data("hour"))) {
      $(this)
        .children(".description")
        .val(localStorage.getItem($(this).data("hour")));
    }
    // Determines color of div based on hour of the day
    if ($(this).data("hour") > dayjs().hour()) {
      $(this).children().addClass("future");
    } else if ($(this).data("hour") < dayjs().hour()) {
      $(this).children().addClass("past");
    } else {
      $(this).children().addClass("present");
    }
  });

  // Adds event listener to each button to save whatever is in description field to localstorage
  saveButton.on("click", (e) => {
    let thisHour = $(e.currentTarget).parent().data("hour");
    let thisDesc = $(e.currentTarget).siblings(".description").val();
    localStorage.setItem(thisHour, thisDesc);
  });
});
