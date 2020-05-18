import React from 'react'
import SEO from './seo'


const Skills = () => (
    <div  id="Skills">
        <SEO title='skills' />
        <p style={{ fontWeight: 'bolder', color: 'rgb(17,17,17)', textAlign: 'center'}}>SKILLS</p>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <div style={{flexDirection: 'column', color: 'rgb(72,72,72)'}}>
                <p style={{fontWeight: 'bold', color: 'rgb(17,17,17)'}}>LANGUAGES</p>
                <p>Javascript (ES6)</p>
                <p>Ruby</p>
                <p>Python</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>SASS</p>
                <p>SQL</p>
            </div>
            <div style={{flexDirection: 'column', color: 'rgb(72,72,72)'}}>
                <p style={{fontWeight: 'bold', color: 'rgb(17,17,17)'}}>FRAMEWORKS</p>
                <p>React</p>
                <p>React Native</p>
                <p>Ruby on Rails</p>
                <p>Node</p>
                <p>Redux</p>
                <p>MobX</p>
                <p>Gatsby</p>
            </div>
            <div style={{flexDirection: 'column', color: 'rgb(72,72,72)'}}>
                <p style={{fontWeight: 'bold', color: 'rgb(17,17,17)'}}>TOOLS</p>
                <p>Git</p>
                <p>Chrome DevTools</p>
                <p>Postman</p>
                <p>PostgreSQL</p>
                <p>SQLite</p>
                <p>Xcode iOS Simulator</p>
                <p>Andriod Studio</p>
            </div>
            <div style={{flexDirection: 'column', color: 'rgb(72,72,72)'}}>
                <p style={{fontWeight: 'bold', color: 'rgb(17,17,17)'}}>DESIGN</p>
                <p>Marvel</p>
                <p>Sketch</p>
                <p>Wireframing</p>
                <p>Photoshop</p>
                <p>Proto.io</p>
                <p>Semantic UI</p>
            </div>            
        </div>
    </div>
)

export default Skills