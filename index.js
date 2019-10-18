var url;
var currency;
var gbp = document.getElementById("gbp");
var usd = document.getElementById("usd");
var btc = document.getElementById("btc");
var next = document.getElementById("next");
var back = document.getElementById("back");
var content = document.getElementById("content");



usd.addEventListener("click", () => {
    currency = "USD";
    url = "https://api.coinranking.com/v1/public/coins?base=USD&timePeriod=24h";
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
        var data = JSON.parse(request.responseText);
        var coins = data.data.coins;
        for (var i = 0; i < coins.length; i++) {
            displayCards(coins, currency, i);
        }

    };
    request.send();
})

gbp.addEventListener("click", () => {
    currency = "GBP";
    url = "https://api.coinranking.com/v1/public/coins?base=GBP&timePeriod=24h";
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
        var data = JSON.parse(request.responseText);
        var coins = data.data.coins;
        for (var i = 0; i < coins.length; i++) {
            displayCards(coins, currency, i);
        }

    };
    request.send();
})


// currency = "USD";
// url = "https://api.coinranking.com/v1/public/coins?base=USD&timePeriod=24h";
// var request = new XMLHttpRequest();
// request.open('GET', url);
// request.onload = () => {
//     var data = JSON.parse(request.responseText);
//     var coins = data.data.coins;
//     displayCards(coins, currency)
// };
// request.send();

// const getData = (url) => {
//     var request = new XMLHttpRequest();
//     request.open('GET', url);
//     request.onload = () => {
//         var data = JSON.parse(request.responseText);
//         coins = data.data.coins;
//         console.log(coins);
//     };
//     request.send();

// }

const displayCards = (coins, currency, i) => {
    // content.innerHTML = "";

    // for (var i = 0; i < coins.length; i++) {
    var card =
        `<div class="card col-sm-5" style="border: 3px ${coins[i].color}; margin:10px;">
            <img src="${coins[i].iconUrl}" class="card-img-top" alt="${coins[i].name}">
            <h4 class = "card-header">
                ${coins[i].name}
            </h4>
            <div class="card-body">
                <h5 class="card-title">${coins[i].symbol}</h5>
                <p class="card-text">${coins[i].description}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Rank: ${coins[i].rank}</li>
                <li class="list-group-item">Price: ${coins[i].price} ${currency}</li>
                <li class="list-group-item">24h change: ${coins[i].change}</li>
                <li class="list-group-item">Market Cap: ${coins[i].marketCap}</li>
                <li class="list-group-item">Circulation: ${coins[i].circulatingSupply}</li>
            </ul>
            <div class="card-footer text-muted">
                ${coins[i].slug}
            </div>
        </div>`
    content.insertAdjacentHTML('beforeend', card);
    console.log(i);
    console.log(card);
    // }

}

// next.addEventListener("click", () => {});