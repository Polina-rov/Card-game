import {
    difficulty,
    hideWhatTheCard,
    ListenerClicksInGame,
    checkClick,
} from "./index.js";
import {
    cardsForLightDiff,
    cardsForMidDiff,
    cardsForHardDiff,
} from "./randomCards.js";

console.log(cardsForLightDiff);
console.log(cardsForMidDiff);
console.log(cardsForHardDiff);

export function renderFirstPage() {
    const body = document.querySelector("body");
    body.innerHTML = ` <main class="difficulty">
    <section class="difficulty__box">
        <p class="difficulty__box_text">
            Выбери <br />
            сложность
        </p>
        <article class="difficulty__box_difficulst">
            <div>
                <input
                    type="radio"
                    value="1"
                    id="light__difficult"
                    name="choice"
                    class="difficulty__box_input"
                />
                <label
                    for="light__difficult"
                    class="difficulty__box_choice difficulty__box_light"
                    >1</label
                >
            </div>
            <div>
                <input
                    type="radio"
                    value="2"
                    id="mid__difficult"
                    name="choice"
                    class="difficulty__box_input"
                />
                <label
                    for="mid__difficult"
                    class="difficulty__box_choice difficulty__box_mid"
                    >2</label
                >
            </div>
            <div>
                <input
                    type="radio"
                    value="3"
                    id="hard__difficult"
                    name="choice"
                    class="difficulty__box_input"
                />
                <label
                    for="hard__difficult"
                    class="difficulty__box_choice difficulty__box_hard"
                    >3</label
                >
            </div>
        </article>
        <button class="difficulty__box_button" disabled>Старт</button>
    </section>
</main>`;
}

export function renderGameBoard() {
    console.log(`сложность ${difficulty}`);
    const body = document.querySelector("body");
    body.innerHTML = `<main class="game">
    <header class="game__header">
        <div class="game__header_timer">
            <div class="timer">
                <p class="timer__min">min</p>
                <p class="timer__sek">sek</p>
            </div>
            <p class="game__header_time">00.00</p>
        </div>
        <button class="game__header_button">Начать заново</button>
    </header>
    <section class="game__board">
        ${cardsForGame}
        </section>
        </main>`;
    const button = document.querySelector(".game__header_button");
    checkClick(button);
    setTimeout(hideWhatTheCard, 5000);
    setTimeout(ListenerClicksInGame, 5000);
}

let cardsForGame = "";

function enumeration(cards) {
    console.log(cards.length);
    const elem = Math.floor(Math.random() * cards.length);
    cardsForGame = cardsForGame + cards[elem];
    console.log(cards[elem]);
    cards.splice(elem, 1);
    return cardsForGame;
}

export function name(cards) {
    cardsForGame = "";
    const length = cards.length;
    console.log(cards.length);
    for (let index = 0; index < length; index++) {
        enumeration(cards);
        if (index === length - 1) {
            renderGameBoard();
        }
    }
}
