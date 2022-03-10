var target = 44 * 86400 + 5 * 3600 + 15 * 60 + 7;
var time = setInterval(handle_time, 1000, target);
var count = 0;
function handle_time(seconds) {
    count++;
    seconds -= count;
    temp = toTime(seconds / 86400);
    seconds %= 86400;
    document.getElementById("days").innerHTML = temp;
    temp = toTime(seconds / 3600);
    seconds %= 3600;
    document.getElementById("hours").innerHTML = temp;
    temp = toTime(seconds / 60);
    seconds %= 60;
    document.getElementById("minutes").innerHTML = temp;
    temp = toTime(seconds);
    document.getElementById("seconds").innerHTML = temp;
}
function toTime(n) {
    if (n < 10) {
        return '0' + Math.floor(n).toString();
    }
    else {
        return Math.floor(n).toString();
    }
}