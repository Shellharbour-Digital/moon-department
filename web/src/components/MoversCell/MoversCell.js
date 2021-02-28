export const QUERY = gql`
  query MoversQuery($currency: String!) {
    getMovers(currency: $currency) {
      rank
      id
      symbol
      name
      image
      current_price
      high_24h
      low_24h
      price_change_percentage_24h
      price_change_percentage_1h
    }
  }
`

export const beforeQuery = ({currency}) => ({
  variables: {
    currency: currency
  },
  pollInterval: 10000
})

export const Loading = () => <tr className='tr-loading'><td><div className='cell-loading'>Loading...</div></td></tr>

export const Empty = () => <tr className='tr-loading'><td><div className='cell-loading'>Empty</div></td></tr>

export const Failure = ({ error }) => <tr className='tr-loading'><td><div className='cell-loading'>Error: {error.message}</div></td></tr>

export const Success = ({ getMovers }) => {
  return getMovers.map((mover) => (
      <tr key={mover.id} className='movers'>
        <td><div><span className='movers-default'>{mover.rank}</span></div></td>
        <td><div><a className='movers-a' target='_blank' href={`https://coingecko.com/en/coins/${mover.id}`}><div><img src={mover.image}/><span className='movers-name'>{mover.name}</span><span className='movers-symbol'>{mover.symbol.toUpperCase()}</span></div></a></div></td>
        <td><div><a className='movers-a' target='_blank' href={`https://coingecko.com/en/coins/${mover.id}#markets`}><span className='movers-default'>${mover.current_price}</span></a></div></td>
        <td><div><span className='movers-default' style={{color: mover.price_change_percentage_24h >= 0 ? '#6ec27e' : '#c83737'}}>{mover.price_change_percentage_24h >= 0 ? '📈' : '📉'}{mover.price_change_percentage_24h.toFixed(2)}%</span></div></td>
        <td><div><span className='movers-default'>${mover.high_24h}</span></div></td>
        <td><div><span className='movers-default'>${mover.low_24h}</span></div></td>
      </tr>
  ))
}
