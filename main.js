// DOM Elements
let nrInput = document.getElementById('nrInput');



// Listening to events

document.getElementById("nrInput").addEventListener("click", displayDate);

function displayDate() {
    document.getElementById("result").innerHTML = Date();
}

