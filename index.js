let request = new XMLHttpRequest();
request.open('GET', 'https://api.coinranking.com/v1/public/coins');
request.onload = () => {
    var data = JSON.parse(request.responseText);
    var coins = data.data.coins;
    console.log(coins[0]);
};
request.send();

let next = document.getElementById("next");
let previous = document.getElementById("previous");
let content = getElementById("content");

const displayCards = (data) => {
    content.insertAdjacentHTML('beforeend')
};

next.addEventListener("click", () => {

});