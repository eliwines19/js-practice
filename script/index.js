document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", clickFunc);

    var startBtn = document.getElementById("start-btn")
    startBtn.addEventListener("click", timer);
})

const timer = () => {
    var changeTime = () => {
        timeElement = document.getElementById("time");
        time = parseInt(timeElement.innerHTML, 10);
        time += 1;
        timeElement.innerHTML = time;
    };
    var interval = setInterval(changeTime, 1000);

    var pause = () => {
        console.log("timer stopped")
        clearInterval(interval)
    }

    var stopBtn = document.getElementById("stop-btn");
    stopBtn.addEventListener("click", pause);

};

const clickFunc = () => {
    var topHeader = document.getElementById("top-header");
    topHeader.style.color = "white";
    topHeader.innerHTML = "Now You Can";
};