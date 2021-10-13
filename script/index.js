document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", clickFunc);
    timerBegin();
})

const timer = () => {
    var changeTime = () => {
        timeElement = document.getElementById("time");
        time = parseInt(timeElement.innerHTML, 10);
        time += 1;
        timeElement.innerHTML = time;
    };
    console.log("timer begins");
    setInterval(changeTime, 1000);
};

const timerBegin = () => {
    const startTimer = document.getElementById("start-btn")
    startTimer.addEventListener("click", timer);
}

const clickFunc = () => {
    var topHeader = document.getElementById("top-header");
    topHeader.style.color = "white";
    topHeader.innerHTML = "Now You Can";
};