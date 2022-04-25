$(document).ready(function () {

  //Setting up the date and appending to the HTML page
  var today = moment().format('MMMM Do YYYY');
  console.log(today)
  $("#currentDay").append(today);

  var now = parseInt(moment().format('HH'));
  console.log(now)

  var $9AM = $("#9AM");
  var $10AM = $("#10AM");
  var $11AM = $("#11AM");
  var $12AM = $("#12AM");
  var $1PM = $("#1PM");
  var $2PM = $("#2PM");
  var $3PM = $("#3PM");
  var $4PM = $("#4PM");
  var $5PM = $("#5PM");


  $("textarea").each(function () {
      var name = parseInt($(this).attr("name"));
      if (name < now) {
          $(this).addClass("bg-gray");
      }
      if (name > now) {
          $(this).addClass("bg-green")
      }

      if (name === now) {
          $(this).addClass("bg-red")
      }



  })

  $("button").on("click", function () {

      //setting items in the local storage
      localStorage.setItem("9AM", ($9AM.val()))
      localStorage.setItem("10AM", ($10AM.val()))
      localStorage.setItem("11AM", ($11AM.val()))
      localStorage.setItem("12AM", ($12AM.val()))
      localStorage.setItem("13PM", ($1PM.val()))
      localStorage.setItem("14PM", ($2PM.val()))
      localStorage.setItem("15PM", ($3PM.val()))
      localStorage.setItem("16PM", ($4PM.val()))
      localStorage.setItem("17PM", ($5PM.val()))

  })

  //getting the content stored and sending to the screen. When page is refreshed content will stay
  $("#9AM").append(localStorage.getItem("9AM"));
  $("#10AM").append(localStorage.getItem("10AM"));
  $("#11AM").append(localStorage.getItem("11AM"));
  $("#12AM").append(localStorage.getItem("12AM"));
  $("#1PM").append(localStorage.getItem("13PM"));
  $("#2PM").append(localStorage.getItem("14PM"));
  $("#3PM").append(localStorage.getItem("15PM"));
  $("#4PM").append(localStorage.getItem("16PM"));
  $("#5PM").append(localStorage.getItem("17PM"));

})