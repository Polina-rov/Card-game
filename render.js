import { difficulty } from "./index.js"

export function renderGameField() {
    const main = document.querySelector('.difficulty')
    main.innerHTML = `<h2>Выбран уровень сложности ${difficulty}</h2>`
};