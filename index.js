import {
    cardsForHardDiff,
    cardsForLightDiff,
    cardsForMidDiff,
} from "./randomCards.js";
import { renderFirstPage, name } from "./render.js";
import "./style.css";

renderFirstPage();

const gameCards = [];

export let difficulty = "";

let choiceInputs = document.querySelectorAll(".difficulty__box_input");
let choiceButton = document.querySelector(".difficulty__box_button");

for (let choiceInput of choiceInputs) {
    choiceInput.addEventListener("click", function (e) {
        (difficulty = e.target.value), buttonDisabled(difficulty);
    });
}
function buttonDisabled(difficulty) {
    if (difficulty) {
        choiceButton.removeAttribute("disabled");
    }
}

choiceButton.addEventListener("click", function () {
    console.log(difficulty);

    if (difficulty === "1") {
        let cardsForGame = cardsForLightDiff.slice();
        name(cardsForGame);
        return cardsForGame;
    }
    if (difficulty === "2") {
        let cardsForGame = cardsForMidDiff.slice();
        name(cardsForGame);
        return cardsForGame;
    } else {
        let cardsForGame = cardsForHardDiff.slice();
        name(cardsForGame);
        return cardsForGame;
    }
});

export function hideWhatTheCard() {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.classList.add("game__board_card");
    });
}

export function ListenerClicksInGame() {
    const cards = document.querySelectorAll(".card");

    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", function (event) {
            cards[i].classList.remove("game__board_card");
            gameCards.push(event.target.id);
            console.log(event.target.id);
            setTimeout(checkGameResult, 40);
        });
    }
}

function checkGameResult() {
    if (!gameCards[1]) {
        return;
    }
    if (gameCards[1] === gameCards[0]) {
        alert("Ты победил");
        setTimeout(gameCards.splice(0, 2), 400);
    }
    if (gameCards[1] !== gameCards[0]) {
        alert("Ты проиграл");
        setTimeout(gameCards.splice(0, 2), 400);
    } else {
        return;
    }
}

export function checkClick(button) {
    button.addEventListener("click", function () {
        console.log(difficulty);
        if (difficulty === "1") {
            let cardsForGame = cardsForLightDiff.slice();
            name(cardsForGame);
            return cardsForGame;
        }
        if (difficulty === "2") {
            let cardsForGame = cardsForMidDiff.slice();
            name(cardsForGame);
            return cardsForGame;
        } else {
            let cardsForGame = cardsForHardDiff.slice();
            name(cardsForGame);
            return cardsForGame;
        }
    });
}
