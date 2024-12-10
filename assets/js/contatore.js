class timer {
    constructor(_time) {
        this.time = _time;
    }
    contatore() {
        this.time++;
        sessionStorage.setItem("timer",this.time);
        return this.time;
    }
}

//MODAL BOOTSTRAP TIMER


let timerSet = 0;
const timerData = new timer(timerSet);

setInterval(() => {
    document.getElementById("time").innerText = timerData.contatore();
},1000);
