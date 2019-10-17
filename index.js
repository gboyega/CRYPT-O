let url;
let currency;
let gbp = document.getElementById("gbp");
let usd = document.getElementById("usd");
let btc = document.getElementById("btc")
let next = document.getElementById("next");
let back = document.getElementById("back");
let content = document.getElementById("content");

const getData = (url) => {
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
        var data = JSON.parse(request.responseText);
        var coins = data.data.coins;
        console.log(coins[0]);
    };
    request.send();
    return coins;
}

const displayCards = (data, currency) => {
    var card = "oriwonkoko";
    content.insertAdjacentHTML('beforeend', card);
}

// displayCards("x", "x");
console.log(content, gbp, usd, btc, next, back);

// next.addEventListener("click", () => {});