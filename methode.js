const student = {
    name: 'hasan ',
    money: 1000,
    class: 'intrer',
    major: ['bangla', 'english', 'math'],

    come: function () {
        console.log(this.major[1], 'give an exam');
    },
    trit: function (taka, bonus) {
        this.money = this.money - taka - bonus;
        return this.money;
    }
}
console.log(student.come());
console.log(student.trit(450, 50))