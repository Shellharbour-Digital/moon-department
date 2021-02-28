// api/src/services/trending/trending.js

import fetch from 'node-fetch'

export const getTrending = async () => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/search/trending`
  )
  const json = await response.json()
  const trending = []

  for (let i= 0; i < json.coins.length; i++) {
      trending[i] =  {
          id: json.coins[i].item.id,
          name: json.coins[i].item.name,
          icon: json.coins[i].item.large
        }
    }

  return trending
}
