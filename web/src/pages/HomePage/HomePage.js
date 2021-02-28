import { Link, routes } from '@redwoodjs/router'
import { useState, useEffect } from 'react'
import TrendingCell from 'src/components/TrendingCell'
import MoversCell from 'src/components/MoversCell'

export const HomePage = () => {

  const [currency, setCurrency] = useState("usd")
  const handleCurrency = (e) => { setCurrency(e.target.value) }

  return (
    <>

    <div id="page-wrapper">

        <section id="wrapper">
          <div className="inner">
            <h1><b>Moon</b>Department</h1>
            <div className='container-flex'>
            <h2>Popular Movers</h2>
            <select className='currency-select' style={{width: 'auto'}} name="currencies" onChange={handleCurrency}>
              <option value='usd'>USD</option>
              <option value='aud'>AUD</option>
              <option value='eur'>EUR</option>
              <option value='btc'>BTC</option>
              <option value='eth'>ETH</option>
            </select>
            </div>
            <table>
            <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h %</th>
              <th>24h High</th>
              <th>24h Low</th>
              </tr>
            </thead>
              <tbody>
                <MoversCell currency={currency}/>
              </tbody>
            </table>

          </div>
          <footer>
            <ul className="icons">
              <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
            </ul>
          </footer>
        </section>

        <section id="banner">
          <div className="inner">
            <div className="content">
              <ul style={{backgroundImage: "url(images/moondeptcall.png)"}}>
                <TrendingCell/>
              </ul>
            </div>
          </div>
        </section>

    </div>

    </>
  )
}

export default HomePage
