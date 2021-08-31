//using objact literal

const student = { name: 'hasan', id: 908 };
// constuctor
const newStudent = new Object()
const creat = Object.create(student)
const nate = creat;
console.log(nate.name);
class People {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

}
const pop = new People('jalal', 687);
console.log(pop);
