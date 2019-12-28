var url;
var gbp = document.getElementById("gbp");
var usd = document.getElementById("usd");
var btc = document.getElementById("btc");
var content = document.getElementById("content");

const getCoins = currency => {
  url = `https://api.coinranking.com/v1/public/coins?base=${currency}&timePeriod=24h`;
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      var coins = data.data.coins;
      content.innerHTML = "";
      for (var i = 0; i < 20; i++) {
        displayCards(coins, currency, i);
      }
    } else {
      window.alert(
        "There's a problem contacting the server, Please refresh or try again in a few moments."
      );
    }
  };

  request.onerror = () => {
    window.alert(
      "There's a problem contacting the server, Please refresh or try again in a few moments."
    );
  };
  request.send();
};

usd.addEventListener("click", () => {getCoins("USD");});

gbp.addEventListener("click", () => {getCoins("GBP")});

btc.addEventListener("click", () => {getCoins("BTC");});

window.onload = () => {getCoins("USD")};

const displayCards = (coins, currency, i) => {
  var card = `<div class="card col-sm-2 mx-sm-5 mt-5" style="margin:10px; padding-left:0; padding-right:0;">
            
            <h4 class = "card-header">
                <img src="${coins[i].iconUrl}" alt="${coins[i].name}" style="height:24px;">
                ${coins[i].name}
            </h4>
            <div class="card-body">
                <h5 class="card-title"> ${coins[i].symbol}</h5>
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
        </div>`;
  content.insertAdjacentHTML("beforeend", card);
};
