const k = {
    mame: 'nai miha', amount: 500, id: 978,
    tret: function (taka) {
        this.amount = this.amount - taka;
        return this.amount;
    }

}
const dea = k.tret(100);
console.log(dea);
const kamla = {
    name: 'kamal',
    id: 987,
    amount: 1000
}
const tretDeakamal = k.tret.bind(kamla);
console.log(tretDeakamal(100));
const donMiha = {
    name: 'don miha',
    id: 89,
    amount: 3000
};
const tratdeayDon = k.tret.bind(donMiha);
console.log(tratdeayDon(100), 'from don');

