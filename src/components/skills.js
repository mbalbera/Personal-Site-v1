import React from 'react'
import SEO from './seo'


const Skills = () => (
    <div id="Skills">
        <SEO title='skills' />
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <div style={{flexDirection: 'column'}}>
                <p style={{fontWeight: 'bolder'}}>SKILLS</p>
            </div>
            <div style={{flexDirection: 'column'}}>
                <p style={{fontWeight: 'bold'}}>LANGUAGES</p>
                <p>Javascript (ES6)</p>
                <p>Ruby</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>SQL</p>
            </div>
            <div style={{flexDirection: 'column'}}>
                <p style={{fontWeight: 'bold'}}>FRAMEWORKS</p>
                <p>React</p>
                <p>React Native</p>
                <p>Rails</p>
                <p>Gatsby</p>
                <p>Next.js</p>
            </div>
            <div style={{flexDirection: 'column'}}>
                <p style={{fontWeight: 'bold'}}>TOOLS</p>
                <p>{`Git & Github`}</p>
                <p>Chrome DevTools</p>
                <p>Postman</p>
                <p>Postgresql</p>
                <p>SQLite</p>
            </div>
            <div style={{flexDirection: 'column'}}>
                <p style={{fontWeight: 'bold'}}>DESIGN</p>
                <p>Marvel</p>
                <p>Sketch</p>
                <p>Wireframing</p>
            </div>            
        </div>
    </div>
)

export default Skills