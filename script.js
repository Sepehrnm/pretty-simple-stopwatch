const timer = document.getElementById('stopwatch');

let minute = 00;
let second = 00;
let stopTime = false;
let resetTime = false;
let myInterval;

function startTimer() {
    if (stopTime == false) {
        stopTime = true;
        timerCycle();
    }
}

function timerCycle() {
    myInterval = setInterval(() => {
        second = parseInt(second);
        minute = parseInt(minute);

        second += 1;

        if (second > 59) {
            second = 0;
            minute += 1;
        }

        if (minute > 59) {
            minute = 0;
        }

        if (second == 0 || second < 10) {
            second = "0" + second;
        }

        if (minute == 0 || minute < 10) {
            minute = "0" + minute;
        }

        timer.innerHTML = `${minute}:${second}`;

    }, 1000)
}

function stopTimer() {
    if (stopTime == true) {
        stopTime = false;
        clearInterval(myInterval);
    }
}

function resetTimer() {
    minute = 00;
    second = 00;
    if (minute == 0 || minute < 10) {
        minute = "0" + minute;
    }
    if (second == 0 || second < 10) {
        second = "0" + second;
    }
    timer.innerHTML = `${minute}:${second}`;
}
