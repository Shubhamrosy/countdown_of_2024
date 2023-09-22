const projectDeadline = new Date("2023-12-31T23:59:59").getTime();
const countdown = setInterval(function() {
    const now = new Date().getTime();
    const timeLeft = projectDeadline - now;

    if (timeLeft <= 0) {
        clearInterval(countdown);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = padZeroes(days);
        document.getElementById("hours").innerHTML = padZeroes(hours);
        document.getElementById("minutes").innerHTML = padZeroes(minutes);
        document.getElementById("seconds").innerHTML = padZeroes(seconds);
    }
}, 1000);

function padZeroes(value) {
    return value < 10 ? "0" + value : value;
}
