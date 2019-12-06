import React from 'react'
import SEO from './seo'


const Skills = () => (
    <div id="Skills">
        <SEO title='skills' />
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <div style={{flexDirection: 'column'}}>
                <p style={{fontWeight: 'bolder', color: 'blue'}}>SKILLS</p>
            </div>
            <div style={{flexDirection: 'column', color: 'rgb(72,72,72)'}}>
                <p style={{fontWeight: 'bold', color: 'rgb(17,17,17)'}}>LANGUAGES</p>
                <p>Javascript (ES6)</p>
                <p>Ruby</p>
                <p>Python</p>
                <p>HTML/CSS</p>
                <p>SQL</p>
            </div>
            <div style={{flexDirection: 'column', color: 'rgb(72,72,72)'}}>
                <p style={{fontWeight: 'bold', color: 'rgb(17,17,17)'}}>FRAMEWORKS</p>
                <p>React</p>
                <p>React Native</p>
                <p>Rails</p>
                <p>Gatsby</p>
                <p>Next.js</p>
            </div>
            <div style={{flexDirection: 'column', color: 'rgb(72,72,72)'}}>
                <p style={{fontWeight: 'bold', color: 'rgb(17,17,17)'}}>TOOLS</p>
                <p>{`Git & Github`}</p>
                <p>Chrome DevTools</p>
                <p>Postman</p>
                <p>Postgresql</p>
                <p>SQLite</p>
            </div>
            <div style={{flexDirection: 'column', color: 'rgb(72,72,72)'}}>
                <p style={{fontWeight: 'bold', color: 'rgb(17,17,17)'}}>DESIGN</p>
                <p>Marvel</p>
                <p>Sketch</p>
                <p>Wireframing</p>
            </div>            
        </div>
    </div>
)

export default Skills