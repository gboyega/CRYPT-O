card = `<div class="card col-sm-4" style="border: thin ${coins[i].color};">
  <img src="${coins[i].iconUrl}" class="card-img-top" alt="${coins[i].name}">
  <h4 class = "card-header">
    ${coins[i].name}
  </h4>
  <div class="card-body">
    <h5 class="card-title">${coins[i].symbol}</h5>
    <p class="card-text">${coins[i].description}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Type: ${coins[i].type}</li>
    <li class="list-group-item">Price: ${coins[i].price, currency}</li>
    <li class="list-group-item">24h change: ${coins[i].change}</li>
    <li class="list-group-item">Market Cap: ${coins[i].marketCap}</li>
    <li class="list-group-item">Circulation: ${coins[i].circulatingSupply}</li>
  </ul>
  <div class="card-footer text-muted">
    ${coins[i].slug}
  </div>
</div>`