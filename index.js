let url;
let currency;
let gbp = document.getElementById("gbp");
let usd = document.getElementById("usd");
let btc = document.getElementById("btc");
let next = document.getElementById("next");
let back = document.getElementById("back");
let content = document.getElementById("content");

const getData = (url) => {
    var coins;
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
        var data = JSON.parse(request.responseText);
        coins = data.data.coins;
        console.log(coins);
    };
    request.send();

}

const displayCards = (data, currency) => {
    content.innerHTML = card;
}

// displayCards("x", "x");
getData("https://api.coinranking.com/v1/public/coins?base=EUR&timePeriod=24h");
console.log(content, gbp, usd, btc, next, back);

// next.addEventListener("click", () => {});