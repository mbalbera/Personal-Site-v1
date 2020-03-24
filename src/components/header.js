import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import TopMenu from "./topMenu"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rgb(72,72,72)`,
      marginBottom: `1.45rem`,
    }}
  >
    <div style={{display: 'flex'}}>
      <div
        style={{
          textAlign: 'left',
          margin: `0 auto`,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
              fontSize: '5vw'
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
      <div
        style={{
          textAlign: 'right',
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <div style={{ margin: 0 }}>
          <h5 style={{color:'rgb(255,255,255)', paddingTop:'2vw', paddingBottom:'none'}}>mhbalbera@gmail.com</h5>
          <h5 style={{color:'rgb(255,255,255)', paddingTop:'none'}}>516.448.0188</h5>
        </div>
      </div>
    </div>
      <TopMenu />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
