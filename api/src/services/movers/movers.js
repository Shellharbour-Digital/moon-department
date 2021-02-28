// api/src/services/movers/movers.js

import fetch from 'node-fetch'

export const getMovers = async ({ currency }) => {
  // TODO: Fetch more than one page?
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&per_page=250&page=1&sparkline=false&price_change_percentage=1h`
  )
  const json = await response.json()
  const movers = []

  for (let i= 0; i < json.length; i++) {
    console.log(json[i].price_change_percentage_1h_in_currency);
      movers[i] =  {
          rank: json[i].market_cap_rank,
          id: json[i].id,
          symbol: json[i].symbol,
          name: json[i].name,
          image: json[i].image,
          current_price: json[i].current_price,
          high_24h: json[i].high_24h,
          low_24h: json[i].low_24h,
          price_change_percentage_24h: json[i].price_change_percentage_24h,
          price_change_percentage_1h: json[i].price_change_percentage_1h_in_currency
        }
    }

  movers.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h)
  const topMovers = movers.slice(0, 20)

  return topMovers
}
