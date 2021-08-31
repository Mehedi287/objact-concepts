const student = {
    name: 'hasan ',
    money: 1000,
    class: 'intrer',
    major: ['bangla', 'english', 'math'],
    tritDey: function (taka) {
        this.money = this.money - taka;
    },
    come: function () {
        console.log(this.major[1], 'give an exam');
    }
}
console.log(student.come());