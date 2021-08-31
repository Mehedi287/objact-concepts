const book = { name: 'gitanjoly', page: 78, price: 45, containt: 'manything' };
// get proparty keys 
const key = Object.keys(book);
console.log(key);
console.log(key[2]);
// get proparty valuse 
const values = Object.values(book);
console.log(values);
console.log(values[1]);
// get key and value 
const entiries = Object.entries(book);
console.log(entiries);
console.log(entiries[1]);
//objact seal ..seal korer pore konu objact delete ba add korea jave nah  but property value change korea jave
const seal = Object.seal(book);
//freeze korlea konu valu add ba chane ba delete korea jave nah 
const freeze = Object.freeze(book)
// delete an proparty 
delete book.page;
console.log(book);
