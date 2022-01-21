init();
var timer = 15.00;
var previousChoice;

function init() {
    create_roulette_array();
    setInterval(countdown, 10);
}

function betselector(choice) {
    if(choice == 0) {
        choice = "zeroButton";
    }
    if(previousChoice != null) {
        document.getElementById(previousChoice).style.border = "none";
        document.getElementById(previousChoice).style.opacity = "100%";
        document.getElementById(previousChoice).style.boxShadow = "0 6px rgb(80, 80, 80)";
        document.getElementById(previousChoice).style.transform = "translateY(0px)";
    }

    document.getElementById(choice).style.border = "solid rgb(266, 266, 266)";
    document.getElementById(choice).style.opacity = "80%";
    document.getElementById(choice).style.boxShadow = "0 2px rgb(80, 80, 80)";
    document.getElementById(choice).style.transform = "translateY(4px)";
    previousChoice = choice;
}

function create_roulette_array() {
    var color_sizing = determine_sizing();
    var color_array = [] //[["green", ((screen.width/2)-(color_sizing/2))]]
    for(let i = 0; i < 38; i = i + 1) {
        
    }
}

function newSpin() {

}

function determine_sizing() {
    var square_dimensions = (screen.height * .1);
    return square_dimensions;
}

function countdown() {
    timer = timer - .01;
    var time = timer.toFixed(2);
    if(timer <= 0) {
        timer = 15;
        time = timer;
        newSpin();
    }
    document.getElementById("timerText").innerHTML = time;
}

//<img src="https://lh3.googleusercontent.com/proxy/UHWhHmCQiMfpLXf7owy5bh2MVX-NZu2ymAxQt-DOBKVKg1hqeodSkNiyq073TdkmjN2QoZwVU09ovTK09gUf5m-BzJx93WVkdHhhAshELr-rYxdBnORkwFEX9UTryHxVZ1enlxfnBvu17fPW0xxHD1BmIDs"/>