const targetDate = new Date("2024-10-31T16:00:00");

function updateCountdown() {
  const now = new Date();
  const timeDifference = targetDate - now;

  if (timeDifference <= 0) {
    document.getElementById("countdown").innerHTML = "<h2>Czas upłynął!</h2>";
    return;
  }


  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}


setInterval(updateCountdown, 1000);
