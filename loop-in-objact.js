const book = { name: 'podda nodir maje', page: 89, price: 854, published: 'may 8 18/1968' };
for (const pro in book) {
    // console.log(pro, book[pro]);
}
const key = Object.keys(book);
for (const pro of key) {
    // console.log(pro, book[pro]);
}
// advance 
const entries = Object.entries(book);
console.log(entries);
for (const [name, page] of entries) {
    console.log(name, page);
}