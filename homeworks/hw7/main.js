// #gsKLAsNWM
//
// *Через Array.prototype. створити власний foreach, filter
// noinspection JSUnusedGlobalSymbols

Array.prototype.ownForEach = function (callback) {
    for (const element of this) {
        callback(element);
    }
};
Array.prototype.ownFilter = function (callback) {
    const result = [];
    for (const element of this) {
        if (callback(element)) {
            result.push(element);
        }
    }
    return result;
};

console.log(Array());


class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    };
}

const cinderella1 = new Cinderella('Anna', 19, 36);
const cinderella2 = new Cinderella('Maria', 22, 37);
const cinderella3 = new Cinderella('Olga', 18, 35);
const cinderella4 = new Cinderella('Elena', 25, 38);
const cinderella5 = new Cinderella('Sofia', 20, 36.5);
const cinderella6 = new Cinderella('Victoria', 23, 39);
const cinderella7 = new Cinderella('Diana', 21, 37.5);
const cinderella8 = new Cinderella('Natalia', 24, 38.5);
const cinderella9 = new Cinderella('Yana', 26, 39.5);
const cinderella10 = new Cinderella('Kristina', 22, 36);


const cinderellasArray = [
    cinderella1, cinderella2, cinderella3, cinderella4, cinderella5,
    cinderella6, cinderella7, cinderella8, cinderella9, cinderella10
];


cinderellasArray.ownForEach(cinderella => console.log(cinderella));


const myOwnFilter = cinderellasArray.ownFilter(cinderella => cinderella.footSize >= 37);
console.log(myOwnFilter);




