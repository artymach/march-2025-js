// #iz6emEsP2BA
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
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//
// Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції
//
// let coursesAndDurationArray = [
//
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
//
// ];
//
// const map = coursesAndDurationArray.map((course, index) => ({id: index + 1, ...course}));
// console.log(map);

// #AiN5CoUQ
//
// Створити функцію, яка робить глибоку копію об’єкту.
//
// Додати перевірки на undefined, null, NaN.
//
// Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції,які в нього були до цього моменту.


const copyObj = function (obj) {
    if (obj) {
        let functions = [];
        for (const key in obj) {
            if (typeof obj[key] === 'function') {
                const functionClone = obj[key].bind({});
                functions.push({functionClone,key});
            }
        }
        const cloneObj = JSON.parse(JSON.stringify(obj))
        for (const func of functions) {
            cloneObj[func.key] = func.functionClone;

        }
        console.log(cloneObj);
        return cloneObj;
    }
    throw new Error('!!!')
}

const clone = copyObj({
    id: 123,
    name: 'kokos',
    greeting() {console.log('hello')},
    foo() {console.log('bar')}
});

clone.greeting();
clone.foo();

