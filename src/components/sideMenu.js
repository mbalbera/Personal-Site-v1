import React from 'react'
// import { Link } from "gatsby"
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome'
// import { faLinkedin, faMedium, faGithub, } from '@fontawesome/free-brands-svg-icons'


const SideMenu = () => (
    <div style={{ maxWidth: '15%', paddingTop: '5%',paddingRight: 0, position:'fixed' }}>
        <ul style={{flexDirection:'column', maxWidth:'15%'}}>
             <li style={{ display:'flex', maxWidth: '15%', paddingRight: 0 }}>
                <a style={{ color: 'rgb(0, 0, 0)', textDecoration: 'none', fontSize: '13px' }} target="_blank" href="https://github.com/mbalbera">
                    {/* <FontAwesomeIcon icon={faGithub} style={{ margin: ".3em" }} /> */}
                    Github
                </a>
            </li>
            <li style={{ display: 'flex',maxWidth: '15%', paddingRight: 0}}>
                <a style={{ color: 'rgb(0, 0, 0)', textDecoration: 'none', fontSize: '13px' }} target="_blank" href="https://www.linkedin.com/in/masonbalbera/">
                    {/* <FontAwesomeIcon icon={faLinkedin} style={{ margin: ".3em" }} /> */}
                    LinkedIn
                </a>
            </li>
            <li style={{ display: 'flex',minWidth: '15%', paddingRight: 0}}>
                <a style={{ color: 'rgb(0, 0, 0)', textDecoration: 'none', fontSize: '13px' }} target="_blank" href="https://medium.com/@mhbalbera">
                    {/* <FontAwesomeIcon icon={faMedium} style={{ margin: ".3em" }} /> */}
                    Medium
                 </a>
            </li>
        </ul>
    </div>
)

export default SideMenu
