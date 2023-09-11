(() => {
    "use strict";
    var d = {
        d: (a, i) => {
            for (var c in i)
                d.o(i, c) &&
                    !d.o(a, c) &&
                    Object.defineProperty(a, c, { enumerable: !0, get: i[c] });
        },
        o: (d, a) => Object.prototype.hasOwnProperty.call(d, a),
    };
    function a() {
        document.querySelector(".game__board").innerHTML =
            ' <div class="card-1"></div>\n <div class="card-2"></div>\n <div class="card-3"></div>\n <div class="card-4"></div>\n <div class="card-5"></div>\n <div class="card-6"></div>\n <div class="card-7"></div>\n <div class="card-8"></div>\n <div class="card-9"></div>\n <div class="card-10"></div>\n <div class="card-11"></div>\n <div class="card-12"></div>\n <div class="card-13"></div>\n <div class="card-14"></div>\n <div class="card-15"></div>\n <div class="card-16"></div>\n <div class="card-17"></div>\n <div class="card-18"></div>\n <div class="card-19"></div>\n <div class="card-20"></div>\n <div class="card-21"></div>\n <div class="card-22"></div>\n <div class="card-23"></div>\n <div class="card-24"></div>\n <div class="card-25"></div>\n <div class="card-26"></div>\n <div class="card-27"></div>\n <div class="card-28"></div>\n <div class="card-29"></div>\n <div class="card-30"></div>\n <div class="card-31"></div>\n <div class="card-32"></div>\n <div class="card-33"></div>\n <div class="card-34"></div>\n <div class="card-35"></div>\n <div class="card-36"></div>';
    }
    d.d({}, { z: () => s }),
        (document.querySelector("body").innerHTML =
            ' <main class="difficulty">\n <section class="difficulty__box">\n <p class="difficulty__box_text">\n Выбери <br />\n сложность\n </p>\n <article class="difficulty__box_difficulst">\n <div>\n <input\n type="radio"\n value="1"\n id="light__difficult"\n name="choice"\n class="difficulty__box_input"\n />\n <label\n for="light__difficult"\n class="difficulty__box_choice difficulty__box_light"\n >1</label\n >\n </div>\n <div>\n <input\n type="radio"\n value="2"\n id="mid__difficult"\n name="choice"\n class="difficulty__box_input"\n />\n <label\n for="mid__difficult"\n class="difficulty__box_choice difficulty__box_mid"\n >2</label\n >\n </div>\n <div>\n <input\n type="radio"\n value="3"\n id="hard__difficult"\n name="choice"\n class="difficulty__box_input"\n />\n <label\n for="hard__difficult"\n class="difficulty__box_choice difficulty__box_hard"\n >3</label\n >\n </div>\n </article>\n <button class="difficulty__box_button" disabled>Старт</button>\n </section>\n</main>');
    const i = document.querySelectorAll(".difficulty__box_input"),
        c = document.querySelector(".difficulty__box_button");
    let s = "";
    for (let d of i)
        d.addEventListener("click", function (d) {
            (s = d.target.value), n(s);
        });
    function n(d) {
        d && c.removeAttribute("disabled");
    }
    c.addEventListener("click", function () {
        console.log(`сложность ${s}`),
            (document.querySelector("body").innerHTML =
                '<main class="game">\n <header class="game__header">\n <div class="game__header_timer">\n <div class="timer">\n <p class="timer__min">min</p>\n <p class="timer__sek">sek</p>\n </div>\n <p class="game__header_time">00.00</p>\n </div>\n <button class="game__header_button">Начать заново</button>\n </header>\n <section class="game__board">\n <div class="game__board_card"></div>\n <div class="game__board_card"></div>\n <div class="game__board_card"></div>\n <div class="game__board_card"></div>\n <div class="game__board_card"></div>\n <div class="game__board_card"></div>\n <div class="game__board_card"></div>\n <div class="game__board_card"></div>\n <div class="game__board_card"></div>\n <div class="game__board_card"></div>\n <div class="game__board_card"></div>\n <div class="game__board_card"></div>\n <div class="game__board_card"></div>\n <div class="game__board_card"></div>\n <div class="game__board_card"></div>\n <div class="game__board_card"></div>\n <div class="game__board_card"></div>\n <div class="game__board_card"></div>\n <div class="game__board_card"></div>\n <div class="game__board_card"></div>\n <div class="game__board_card"></div>\n <div class="game__board_card"></div>\n <div class="game__board_card"></div>\n <div class="game__board_card"></div>\n <div class="game__board_card"></div>\n <div class="game__board_card"></div>\n <div class="game__board_card"></div>\n <div class="game__board_card"></div>\n <div class="game__board_card"></div>\n <div class="game__board_card"></div>\n <div class="game__board_card"></div>\n <div class="game__board_card"></div>\n <div class="game__board_card"></div>\n <div class="game__board_card"></div>\n <div class="game__board_card"></div>\n <div class="game__board_card"></div>\n </section>\n</main>'),
            document
                .querySelector(".game__header_button")
                .addEventListener("click", a);
    });
})();
