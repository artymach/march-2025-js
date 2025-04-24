// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”
//
// при перезавантаженні сторінки до значаення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд – нічого не відбувається


let price = +localStorage.getItem('price') || 100;
let lastTime = +localStorage.getItem('timestamp') || 0;

document.getElementById('box').innerText = price + ' грн';

let nowTime = new Date().getTime();

if (nowTime - lastTime >= 10000) {
    price += 10;
    localStorage.setItem('price', price);
    localStorage.setItem('timestamp', nowTime.toString());
}

// #NKB0tgWIK1G
//
// ***PAGINATION
//
// зробити масив на 100 об’єктів та дві кнопки prev next
//
// при завантажені сторінки з’являються перші 10 об’єктів.
//
// При натисканні next виводяться наступні 10 об’єктів
//
// При натисканні prev виводяться попередні 10 об’єктів

const array = [];
for (let i = 1; i < 101; i++) {
    array.push({id: i, name: 'item'});
}
console.log(array);

let currentPage = 1;
const itemsPerPage = 10;

const block = document.getElementById('block');

function renderPage() {
    block.innerText = '';
    const startPage = (currentPage - 1) * itemsPerPage;
    const endPage = startPage + itemsPerPage;

    for (let i = startPage; i < endPage && i < array.length; i++) {
        const item = array[i];
        block.innerText += `${item.id} - ${item.name}\n`;
    }
}

renderPage();

const btnNext = document.getElementById('next');
btnNext.addEventListener('click', () => {
    const maxPage = array.length / itemsPerPage;
    if (currentPage < maxPage) {
        currentPage++;
        renderPage();
    }
});

const btnPrev = document.getElementById('prev');
btnPrev.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderPage();
    }
});


