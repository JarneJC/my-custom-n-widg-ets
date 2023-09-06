function updateTime() {
  var date = new Date();

  var hr;
  var min =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  var sec =
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  var ampm = date.getHours() > 12 ? "PM" : "AM";

  if (hr == 0) {
    hr = 12;
  } else if (hr > 12) {
    hr = date.getHours() - 12;
  } else {
    hr = date.getHours();
  }

  document.getElementsByClassName("h")[0].innerHTML = hr;
  document.getElementsByClassName("m")[0].innerHTML = min;
  document.getElementsByClassName("s")[0].innerHTML = sec;

  document.getElementsByClassName("ampm")[0].innerHTML = ampm;

  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var day = date.getDay();
  var month = date.getMonth();
  console.log(day);
  console.log(month);
  var currentDate = days[day] + ", " + months[month] + " " + day;

  document.getElementsByClassName("date")[0].innerHTML = currentDate;
}

updateTime();
setInterval(function () {
  updateTime();
}, 1000);
