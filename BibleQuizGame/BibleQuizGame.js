let current = 0;
let stars = 0;

const questions = [
    {
        q: "Who built the ark?",
        answers: ["Moses", "Noah", "David"],
        correct: 1
    },
    {
        q: "Who defeated Goliath?",
        answers: ["David", "Elijah", "Peter"],
        correct: 0
    },
    {
        q: "How many loaves did Jesus use?",
        answers: ["2", "5", "12"],
        correct: 1
    },
    {
        q: "Where was baby Jesus born?",
        answers: ["Nazareth", "Bethlehem", "Jerusalem"],
        correct: 1
    },
    {
        q: "Who led the Israelites out of Egypt?",
        answers: ["Noah", "Moses", "Abraham"],
        correct: 1
    },
    {
        q: "What did God create on the first day?",
        answers: ["Animals", "Light", "People"],
        correct: 1
    },
    {
        q: "Who was swallowed by a big fish?",
        answers: ["Jonah", "Daniel", "Paul"],
        correct: 0
    },
    {
        q: "What did David use to fight Goliath?",
        answers: ["Sword", "Slingshot", "Bow"],
        correct: 1
    }
];

function loadQuestion() {
    const q = questions[current];

    document.getElementById("question").innerText = q.q;

    const buttons = document.querySelectorAll(".answer-btn");

    buttons[0].innerText = q.answers[0];
    buttons[1].innerText = q.answers[1];
    buttons[2].innerText = q.answers[2];

    document.getElementById("feedback").innerText = "";
}

function checkAnswer(index) {
    const correct = questions[current].correct;
    const feedback = document.getElementById("feedback");

    if (index === correct) {
        stars++; // ⭐ ADD STAR

        feedback.innerText = "Correct! ⭐";
        feedback.style.color = "green";
    } else {
        feedback.innerText = "Try again!";
        feedback.style.color = "red";
    }

    updateStars();
}

function updateStars() {
    let starDisplay = document.getElementById("stars");

    if (!starDisplay) {
        starDisplay = document.createElement("div");
        starDisplay.id = "stars";
        starDisplay.style.marginTop = "15px";
        starDisplay.style.fontWeight = "bold";
        starDisplay.style.fontSize = "18px";
        document.querySelector(".game-container").appendChild(starDisplay);
    }

    starDisplay.innerText = "⭐ Stars: " + stars;
}

function nextQuestion() {
    current++;

    const nextBtn = document.querySelector(".next-btn");

    if (current >= questions.length) {
        document.getElementById("question").innerText =
            "🎉 Game Finished! You earned " + stars + " stars! 🎉";

        document.querySelectorAll(".answer-btn").forEach(btn => btn.style.display = "none");

        // Turn button into restart button
        nextBtn.innerText = "Restart Quiz";
        nextBtn.onclick = restartGame;

        return;
    }

    loadQuestion();
    
}
document.addEventListener("DOMContentLoaded", loadQuestion);
