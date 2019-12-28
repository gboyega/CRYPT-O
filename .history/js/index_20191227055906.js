var url;
var currency;
var gbp = document.getElementById("gbp");
var usd = document.getElementById("usd");
var btc = document.getElementById("btc");
var back = document.getElementById("back")
var content = document.getElementById("content");



usd.addEventListener("click", () => {
    currency = "USD";
    url = "https://api.coinranking.com/v1/public/coins?base=USD&timePeriod=24h";
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            var coins = data.data.coins;
            content.innerHTML = "";
            for (var i = 0; i < coins.length; i++) {
                displayCards(coins, currency, i);
            }
        } else {
            window.alert("There's a problem contacting the server, Please refresh or try again in a few moments.");
        };
    };

    request.onerror = () => {
        window.alert("There's a problem contacting the server, Please refresh or try again in a few moments.");
    }
    request.send();
})

gbp.addEventListener("click", () => {
    currency = "GBP";
    url = "https://api.coinranking.com/v1/public/coins?base=GBP&timePeriod=24h";
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            var coins = data.data.coins;
            content.innerHTML = "";
            for (var i = 0; i < coins.length; i++) {
                displayCards(coins, currency, i);
            }
        } else {
            window.alert("There's a problem contacting the server, Please refresh or try again in a few moments.");
        };
    };

    request.onerror = () => {
        window.alert("There's a problem contacting the server, Please refresh or try again in a few moments.");
    }
    request.send();
})

btc.addEventListener("click", () => {
    currency = "BTC";
    url = "https://api.coinranking.com/v1/public/coins?base=BTC&timePeriod=24h";
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            var coins = data.data.coins;
            content.innerHTML = "";
            for (var i = 0; i < coins.length; i++) {
                displayCards(coins, currency, i);
            }
        } else {
            window.alert("There's a problem contacting the server, Please refresh or try again in a few moments.");
        };
    };

    request.onerror = () => {
        window.alert("There's a problem contacting the server, Please refresh or try again in a few moments.");
    }

    request.send();
})

window.onload = () => {
    currency = "USD";
    url = "https://api.coinranking.com/v1/public/coins?base=USD&timePeriod=24h";
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            var coins = data.data.coins;
            content.innerHTML = "";
            for (var i = 0; i < coins.length; i++) {
                displayCards(coins, currency, i);
            }
        } else {
            window.alert("There's a problem contacting the server, Please refresh or try again in a few moments.");
        };
    };

    request.onerror = () => {
        window.alert("There's a problem contacting the server, Please refresh or try again in a few moments.");
    }
    request.send();
}

const displayCards = (coins, currency, i) => {
    var card =
        `<div class="card col-sm-3 mx-sm-5" style="margin:20px; padding-left:0; padding-right:0;">
            <img src="${coins[i].iconUrl}" class="card-img-top" alt="${coins[i].name}" style="height:200px; margin:10px;">
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
                <li class="list-group-item">24h Price change: ${coins[i].change}%</li>
                <li class="list-group-item">Market Cap: ${coins[i].marketCap} ${currency}</li>
                <li class="list-group-item">Circulation: ${coins[i].circulatingSupply}</li>
            </ul>
            <div class="card-footer text-muted">
                Data provided by <a href="coinranking.com" class="card-link text-success" target="_blank">Coinranking</a>
            </div>
        </div>`
    content.insertAdjacentHTML('beforeend', card);
}