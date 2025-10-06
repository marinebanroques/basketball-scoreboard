let guest = 0;
let home = 0;

document.getElementById("home-result").textContent = home;
document.getElementById("guest-result").textContent = guest;

function add1home() {
    home ++;
    document.getElementById("home-result").textContent = home;
    if (home > guest) {
        document.getElementById("home-result").textContent = home + " 🏆";
        document.getElementById("guest-result").textContent = guest;
    }
}

function add2home() {
    home += 2;
    document.getElementById("home-result").textContent = home;
    if (home > guest) {
        document.getElementById("home-result").textContent = home + " 🏆";
        document.getElementById("guest-result").textContent = guest;
    }
}

function add3home() {
    home += 3;
    document.getElementById("home-result").textContent = home;
    if (home > guest) {
        document.getElementById("home-result").textContent = home + " 🏆";
        document.getElementById("guest-result").textContent = guest;
    }
}

function add1guest() {
    guest ++;
    document.getElementById("guest-result").textContent = guest;
    if (guest > home) {
        document.getElementById("guest-result").textContent = guest + " 🏆";
        document.getElementById("home-result").textContent = home;
    }
}

function add2guest() {
    guest += 2;
    document.getElementById("guest-result").textContent = guest;
    if (guest > home) {
        document.getElementById("guest-result").textContent = guest + " 🏆";
        document.getElementById("home-result").textContent = home;
    }
}

function add3guest() {
    guest += 3;
    document.getElementById("guest-result").textContent = guest;
    if (guest > home) {
        document.getElementById("guest-result").textContent = guest + " 🏆";
        document.getElementById("home-result").textContent = home;
    }
}

function reset() {
    home = 0;
    guest = 0;
    document.getElementById("home-result").textContent = home;
    document.getElementById("guest-result").textContent = guest;
}