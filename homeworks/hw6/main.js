// #dFeorS3m7u
//
// – Знайти та вивести довижину настипних стрінгових значень
//
//  ‘hello world’
//
// ‘lorem ipsum’
//
// ‘javascript is cool’
//
// let str1 = 'hello world';
// console.log(str1.length);
//
// let str2 = 'lorem ipsum';
// console.log(str2.length);
//
// let str3 = 'javascript is cool';
// console.log(str3.length);
//
// console.log('------------------------');

// #8lld9HMxXWB
//
// – Перевести до великого регістру наступні стрінгові значення
//
// ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’
//
// let s1 = 'hello world';
// let s1New = s1.toUpperCase();
// console.log(s1New);
//
// let s2 = 'lorem ipsum';
// let s2New = s2.toUpperCase();
// console.log(s2New.toUpperCase());
//
// let s3 = 'javascript is cool';
// let s3New = s3.toUpperCase();
// console.log(s3New.toUpperCase());
//
// console.log('------------------------');

// #ClDsAm7xba7
//
// – Перевести до нижнього регістру настипні стрінгові значення
//
// ‘HELLO WORLD’, ‘LOREM IPSUM’, ‘JAVASCRIPT IS COOL’
//
// let st1 = 'HELLO WORLD';
// let st1New = st1.toLowerCase()
// console.log(st1New);
//
// let st2 = 'LOREM IPSUM';
// let st2New = st2.toLowerCase()
// console.log(st2New.toLowerCase());
//
// let st3 = 'JAVASCRIPT IS COOL';
// let st3New = st3.toLowerCase()
// console.log(st3New.toLowerCase());
//
// console.log('------------------------');

// #0b89BkYZwu
//
// – Є “брудна” стрінга let str = ‘ dirty string   ‘ . Почистити її від зайвих пробілів.
//
// let str = ' dirty string   ';
// console.log(str.length);
// let clearStr = str.trim();
// console.log(clearStr);
// console.log(clearStr.length);
//
// console.log('------------------------');

// #bfoJuse4ZzP
//
// – Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//
//   let str = ‘Ревуть воли як ясла повні’;
//
//   let arr = stringToArray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]
//
// let str = 'Ревуть воли як ясла повні';
//
// function stringToArray(str) {
//     if (str) {
//         return str.split(' ');
//     } else {
//         return [];
//     }
// }
//
// let arr = stringToArray(str);
// console.log(arr);

// – є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об’єкти в масиві на стрінгові.
//
// let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// let arrStr = numbers.map(number => number + '');
// console.log(arrStr);

//#5hqyKTfmc
//
// – створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//
// let nums = [11,21,3];
//
// sortNums(nums,’ascending’) // [3,11,21]
//
// sortNums(nums,’descending’) // [21,11,3]
//
// let nums = [11, 21, 3];
//
// function sortNums(nums, direction) {
//     if (direction === 'ascending') return nums.sort((a, b) => a - b);
//     else if (direction === 'descending') return nums.sort((a, b) => b - a);
//     else {return 'Wrong direction'}
// }
//
// console.log(sortNums([11, 21, 3], 'ascending'));
// console.log(sortNums([11, 21, 3], 'descending'));
// console.log(sortNums([11, 21, 3], 'okten is cool'));

// #yo06d74c1C
//
// – є масив
//
// let coursesAndDurationArray = [
//
//     {title: ‘JavaScript Complex’, monthDuration: 5},
//
//     {title: ‘Java Complex’, monthDuration: 6},
//
//     {title: ‘Python Complex’, monthDuration: 6},
//
//     {title: ‘QA Complex’, monthDuration: 4},
//
//     {title: ‘FullStack’, monthDuration: 7},
//
//     {title: ‘Frontend’, monthDuration: 4}
//
// ];
//
//  — відсортувати його за спаданням за monthDuration
//
//  — відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
//  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
//
// let coursesAndDurationArray = [
//
//     {title: 'JavaScript Complex', monthDuration: 5},
//
//     {title: 'Java Complex', monthDuration: 6},
//
//     {title: 'Python Complex', monthDuration: 6},
//
//     {title: 'QA Complex', monthDuration: 4},
//
//     {title: 'FullStack', monthDuration: 7},
//
//     {title: 'Frontend', monthDuration: 4}
//
// ];
//
// const modifiedArray = coursesAndDurationArray
//     .sort((a, b) => b.monthDuration - a.monthDuration)
//     .filter((value) => value.monthDuration > 5)
//     .map((value, index) => ({id: index + 1, ...value}));
//
// console.log(modifiedArray);

// #4LJn7zBx
//
// взяти з arrays.js масив coursesArray
//
// –написати пошук всіх об’єктів, в яких в modules є sass
//
// –написати пошук всіх об’єктів, в яких в modules є docker
//
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// const sassCourses = coursesArray.filter((course) => course.modules.includes('sass'));
// console.log(sassCourses);
// const dockerCourses = coursesArray.filter((course) => course.modules.includes('docker'));
// console.log(dockerCourses);
//
// описати
// колоду
// карт(від
// 6
// до
// туза
// без
// джокерів
// ).
// Більшу
// частину
// колоди
// можна
// описати
// з
// використанням
// циклу
//
// Після
// опису, використовуючи
// функції
// масивіів:
//
//     –
// знайти
// піковий
// туз
//
//  – всі
// шістки
//
//  – всі
// червоні
// карти
//
//  – всі
// буби
//
//  – всі
// трефи
// від
// 9
// та
// більше
//
//
// Приклад
// моделі
// об’єкту
// карти:
//
// {
//
//     cardSuit: ”
// , // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//
//     value: ”
// , // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//
//     color:”
// , // ‘red’,’black’
//
//}

const deck = [];

const cardSuit = ['spade', 'diamond', 'heart', 'clubs'];
const value = [6, 7, 8, 9, 10, 'ace', 'jack', 'queen', 'king'];


for (const itemCardSuit of cardSuit) {
    for (const itemValue of value) {
        let color;
        if (itemCardSuit === 'spade' || itemCardSuit === 'clubs') {
            color = 'black'
        } else if (itemCardSuit === 'diamond' || itemCardSuit === 'heart') {
            color = 'red';
        }
        deck.push({
            cardSuit: itemCardSuit,
            value: itemValue,
            color: color
        })
    }
}
console.log(deck);

//  – знайти піковий туз
const spadeAce = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log(spadeAce);

//  – всі шістки
const sixes = deck.filter((card) => card.value === 6);
console.log(sixes);

//  – всі червоні карти
const redCards = deck.filter((card) => card.color === 'red');
console.log(redCards);

//  – всі буби
const diamonds = deck.filter((card) => card.cardSuit === 'diamond');
console.log(diamonds);

//  – всі трефи від 9 та більше
const clubs = deck.filter((card) => card.cardSuit === 'clubs' && (typeof card.value === 'string' || card.value >= 9));
console.log(clubs);


// #EP5I1UUzAX
//
// Взяти описану колоду карт, та за допомоги reduce “упакувати” всі карти по “мастях” в об’єкт
//
// Приклад моделі кінцевого об’єкту
//
// {
//
//     spades:[],
//
//     diamonds:[],
//
//     hearts:[],
//
//     clubs:[]
//
// }
//
// Попередній

let deckOfCardsBySuit = deck.reduce((previousValue, currentValue) => {

    if (currentValue.cardSuit === 'spade') {
        previousValue.spades.push(currentValue)
    } else if (currentValue.cardSuit === 'heart') {
        previousValue.hearts.push(currentValue)
    } else if (currentValue.cardSuit === 'diamond') {
        previousValue.diamonds.push(currentValue)
    } else if (currentValue.cardSuit === 'clubs') {
        previousValue.clubs.push(currentValue)
    }
    return previousValue


}, {spades: [], diamonds: [], hearts: [], clubs: []});

console.log(deckOfCardsBySuit);


