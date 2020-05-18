import React from 'react'

const SideMenu = (props) => (
    <div style={{ maxWidth: '15%', paddingTop: '5%',paddingRight: 0, position:'fixed' }}>
        <ul style={{flexDirection:'column', maxWidth:'15%'}}>
             <li style={{ display:'flex',  paddingRight: 0 }}>
                <a style={{ color: 'rgb(0, 0, 0)', textDecoration: 'none', fontSize: '13px' }} target="_blank" href="https://github.com/mbalbera">
                    Github
                </a>
                {/* <img src="https://image.flaticon.com/icons/svg/25/25231.svg" href="https://github.com/mbalbera"/> */}
            </li>
            <li style={{ display: 'flex', paddingRight: 0}}>
                <a style={{ color: 'rgb(0, 0, 0)', textDecoration: 'none', fontSize: '13px' }} target="_blank" href="https://www.linkedin.com/in/masonbalbera/">
                    LinkedIn
                </a>
                {/* <img src="https://image.flaticon.com/icons/png/512/61/61109.png" href="https://www.linkedin.com/in/masonbalbera/" /> */}
            </li>
            <li style={{ display: 'flex', paddingRight: 0}}>
                <a style={{ color: 'rgb(0, 0, 0)', textDecoration: 'none', fontSize: '13px' }} target="_blank" href="https://medium.com/@mhbalbera">
                    Medium
                 </a>
                {/* <img src="https://image.flaticon.com/icons/png/512/61/61109.png" href="https://medium.com/@mhbalbera" /> */}
            </li>
            {/* <li style={{ display: 'flex', paddingRight: 0}}>
                <p style={{ color: 'rgb(0, 0, 0)', textDecoration: 'none', fontSize: '13px' }}>Color Scheme</p>
            </li> */}
            {/* <li style={{ display: 'flex',  paddingRight: 0 }}>
                <input onChange={(e)=>props.changeColors(e)} value={props.colorScheme} type="range" id="colorScheme" name="colorScheme" min="0" max="2" />
            </li> */}
        </ul>
    </div>
)

export default SideMenu
