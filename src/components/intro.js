import React from 'react'
import SEO from "./seo"

const Intro = () => (
    <div>
        <SEO title="Intro" />
        <div id="Home" style={{ paddingBottom: '1.5vw', paddingTop: '3vw' }}>
            <p>Hi my name is </p>
            <h1>Mason Balbera.</h1>
            <h2>I am a Full Stack Web and Mobile app developer creating engaging applications from ideation to completion.</h2>
            <p> Using JavaScript, React, React-Native, Ruby on Rails and Python I build awesome applications. Study of the law and success in financial planning has primed me to deliver simple and effective code. I am fully committed to every step of the process from scratch to launch. </p>
            {/* <p>Full stack web and mobile developer with an eagerness to build and create technology.  With experience in Ruby on Rails, JavaScript, and React, I discovered web development through my education and my curiosity to learn. I bring strong skills in communicating complex concepts, understanding the needs of individual consumers and businesses, as well developing solutions to meet those needs.</p> */}
        </div>
    </div>
)

export default Intro

