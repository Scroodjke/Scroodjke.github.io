let calculate = {
    costs: [
        [5000, 15000, 20000],
        [0, 10000, 20000],
        [6000, 7000],
    ],
    deadlines: [
        [7, 14, 21],
        [0, 0, 7],
        [2, 4],
    ],
    costsSumm(answers) {
        let costResult;
        switch (answers[0]) {
            case '1':
                costResult = this.costs[0][0];
                break;
            case '2':
                costResult = this.costs[0][1];
                break;
            case '3':
                costResult = this.costs[0][2];
                break;
            default:
                costResult += 0;
                break;
        }
        switch (answers[1]) {
            case '1':
                costResult += this.costs[1][0];
                break;
            case '2':
                costResult += this.costs[1][1];
                break;
            case '3':
                costResult += this.costs[1][2];
                break;
            default:
                costResult += 0;
                break;
        }

        switch (answers[2]) {
            case '1':
                costResult += this.costs[2][0];
                break;
            case '2':
                costResult += this.costs[2][1];
                break;

            default:
                costResult += 0;
                break;
        }

        return costResult;
    },

    deadlinesSumm() {
        let deadlinesResult;
        switch (answers[0]) {
            case '1':
                deadlinesResult = this.deadlines[0][0];
                break;
            case '2':
                deadlinesResult = this.deadlines[0][1];
                break;
            case '3':
                deadlinesResult = this.deadlines[0][2];
                break;
            default:
                deadlinesResult = 0;
                break;
        }

        switch (answers[1]) {
            case '1':
                deadlinesResult += this.deadlines[1][0];
                break;
            case '2':
                deadlinesResult += this.deadlines[1][1];
                break;
            case '3':
                deadlinesResult += this.deadlines[1][2];
                break;
            default:
                deadlinesResult += 0;
                break;
        }

        switch (answers[2]) {
            case '1':
                deadlinesResult += this.deadlines[2][0];
                break;
            case '2':
                deadlinesResult += this.deadlines[2][1];
                break;
            default:
                deadlinesResult += 0;
                break;
        }
        return deadlinesResult;
    }
};
let answers = new Array(3);
answers[0] = prompt("Тип сайта: 1 - Визитка: 5000р, 2 - Форум: 15000р, 3 - Интернет магазин: 20000р");
answers[1] = prompt("Дизайн: 1 - Уже готовый дизайн: 0р, 2 - Готовый шаблонный дизайн: 10000р, 3 - Разработка индивидуального дизайна: 20000");
answers[2] = prompt("Адаптивность: 1 - Адаптивный: 6000р, 2 - Адаптивный с эффектами анимации - 7000");


let val1 = calculate.costsSumm(answers);
let val2 = calculate.deadlinesSumm(answers);
console.log(calculate.costsSumm(answers));
alert("Сумма: " + val1);
console.log(calculate.deadlinesSumm(answers));
alert("Срок в сутках: " + val2);