var score, marcador, bot, playU, playB, play;

init();

document.querySelector("#rock").addEventListener("click", function() {
  if (play) {
    document.getElementById("playUser").style.display = "block";
    document.getElementById("playUser").src = "rock.png";
    playU = "rock";
    playBot();
    scoring();
    marca();
    win();
  }
});

document.querySelector("#paper").addEventListener("click", function() {
  if (play) {
    document.getElementById("playUser").style.display = "block";
    document.getElementById("playUser").src = "paper.png";
    playU = "paper";
    playBot();
    scoring();
    marca();
    win();
  }
});

document.querySelector("#scissors").addEventListener("click", function() {
  if (play) {
    document.getElementById("playUser").style.display = "block";
    document.getElementById("playUser").src = "scissors.png";
    playU = "scissors";
    playBot();
    scoring();
    marca();
    win();
  }
});

function init() {
  score = [0, 0];
  marcador = [0, 0];
  play = true;
  document.querySelector("#playUser").style.display = "none";
  document.querySelector("#playBot").style.display = "none";
}

function playBot() {
  if (play) {
    bot = Math.floor(Math.random() * 3);
    if (bot === 0) {
      playB = "rock";
      document.getElementById("playBot").style.display = "block";
      document.getElementById("playBot").src = "rock.png";
    } else if (bot === 1) {
      playB = "paper";
      document.getElementById("playBot").style.display = "block";
      document.getElementById("playBot").src = "paper.png";
    } else {
      playB = "scissors";
      document.getElementById("playBot").style.display = "block";
      document.getElementById("playBot").src = "scissors.png";
    }
  }
}

function scoring() {
  if (play) {
    if (playU === "rock") {
      if (playB === "paper") {
        score[1] += 1;
        document.querySelector("#score-2").textContent = score[1];
      } else if (playB === "scissors") {
        score[0] += 1;
        document.querySelector("#score-1").textContent = score[0];
      }
    } else if (playU === "paper") {
      if (playB === "scissors") {
        score[1] += 1;
        document.querySelector("#score-2").textContent = score[1];
      } else if (playB === "rock") {
        score[0] += 1;
        document.querySelector("#score-1").textContent = score[0];
      }
    } else if (playU === "scissors") {
      if (playB === "rock") {
        score[1] += 1;
        document.querySelector("#score-2").textContent = score[1];
      } else if (playB === "paper") {
        score[0] += 1;
        document.querySelector("#score-1").textContent = score[0];
      }
    }
  }
}

function marca() {
  if (score[0] % 3 === 0 && score[0] != 0) {
    marcador[0] += 1;
    document.querySelector("#marcadorU").textContent = marcador[0];
    score[0] = 0;
    score[1] = 0;
  } else if (score[1] % 3 === 0 && score[1] != 0) {
    marcador[1] += 1;
    document.querySelector("#marcadorB").textContent = marcador[1];
    score[1] = 0;
    score[0] = 0;
  }
}

function win() {
  if (marcador[0] === 3) {
    document.querySelector("#title").textContent = "User Winner!";
    document.querySelector("#title").style.color = "#e83232";
    play = false;
  } else if (marcador[1] === 3) {
    document.querySelector("#title").textContent = "Bot Winner!";
    document.querySelector("#title").style.color = "#e83232";
    play = false;
  }
}
