"use strict";
const monthes = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "Jule",
  "August",
  "Sectember",
  "Octomber",
  "November",
  "December",
];
let i = 4;
let j = 3;

let countDown = new Date(`${monthes[i]} 28, 202${j} 19:48:00`).getTime();

let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

const timer = setInterval(function () {
  const now = new Date().getTime();
  let difference = countDown - now;

  days.innerHTML = Math.floor(difference / (1000 * 60 * 60 * 24));
  hours.innerHTML = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  minutes.innerHTML = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  seconds.innerHTML = Math.floor((difference % (1000 * 60)) / 1000);
  if (difference < 0 && i === 11) {
    countDown = new Date(`${monthes[i++]} 19, 202${j++} 19:40:00`).getTime();
  } else if (difference < 0) {
    countDown = new Date(`${monthes[(i = 0)]} 19, 202${j} 19:40:00`).getTime();
  }
}, 1000);
