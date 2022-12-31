// Save Highscores to local storage
const highScoresContainer = document.getElementById("high-scores-container");
const scores = JSON.parse(localStorage.getItem("score_data")) || [];