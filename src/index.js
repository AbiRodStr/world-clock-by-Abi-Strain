function updateTime() {
  let losAngelesTime = moment().tz("America/Los_Angeles");
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  losAngelesDateElement.innerHTML = moment().format("Do MMMM YYYY");

  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let sydneyTime = moment().tz("Australia/Sydney");
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  sydneyDateElement.innerHTML = moment().format("Do MMMM YYYY");

  let sydneyTimeElement = sydneyElement.querySelector(".time");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let tokyoTime = moment().tz("Asia/Tokyo");
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  tokyoDateElement.innerHTML = moment().format("Do MMMM YYYY");

  let tokyoTimeElement = tokyoElement.querySelector(".time");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
