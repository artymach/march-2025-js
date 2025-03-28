// * Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let someCurrency;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            someCurrency = item;
        }
    }
    return sumUAH / someCurrency.value
}

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));
console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'EUR'));

