export const QUERY = gql`
  query TrendingQuery {
    getTrending {
      id
      name
      icon
    }
  }
`

export const beforeQuery = () => ({ pollInterval: 60000 })

export const Loading = () => <div></div>

export const Empty = () => <li><div style={{padding: 0}} className='cell-loading'>Empty</div></li>

export const Failure = ({ error }) => <li><div style={{padding: 0}} className='cell-loading'>Error: {error.message}</div></li>

export const Success = ({ getTrending }) => {
  return getTrending.map((trend) => (
    <li key={trend.id}>
      <a target='_blank' href={`https://coingecko.com/en/coins/${trend.id}`}>
        <img src={trend.icon} alt={trend.name} />
        <span>{trend.name}</span>
      </a>
    </li>
  ))
}
