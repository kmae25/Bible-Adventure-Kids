let stars = 0;
let current = 0;

const verses = [
    {
        text: "Your word is a lamp to my ____ and a light to my path.",
        answer: "feet"
    },
    {
        text: "In the beginning God created the ____.",
        answer: "heavens"
    },
    {
        text: "Jesus said, 'Let the little children come to ____.'",
        answer: "me"
    }
];

function loadVerse() {
    document.querySelector(".verse-text").innerText = verses[current].text;
    document.getElementById("verse-input").value = "";
    document.getElementById("verse-feedback").innerText = "";
}

function checkVerse() {
    const input = document.getElementById("verse-input").value.trim().toLowerCase();
    const feedback = document.getElementById("verse-feedback");

    if (input === verses[current].answer) {
        stars++;
        feedback.innerText = "Correct! ⭐ You got a star!";
        feedback.style.color = "green";
    } else {
        feedback.innerText = "Try again!!";
        feedback.style.color = "red";
    }

    document.getElementById("verse-stars").innerText = "⭐ Stars: " + stars;
}

function nextVerse() {
    current++;

    if (current >= verses.length) {
        current = 0;
        alert("You finished all verses! Restarting.");
    }

    loadVerse();
}

// button events 
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("checkBtn").addEventListener("click", checkVerse);
    document.getElementById("nextBtn").addEventListener("click", nextVerse);

    loadVerse();
});