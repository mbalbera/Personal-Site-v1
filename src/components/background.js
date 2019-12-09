import React from 'react'
import SEO from "./seo"

const Intro = () => (
    <div>
        <SEO title="Intro" />
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div style={{  marginBottom: `1.45rem`, paddingBottom: '6vw', paddingRight: '2vw' }}>
                <h2>Background</h2>
                <p>
                    I recently graduated from The Flatiron School’s immersive program in New York City. As a software engineer, I enjoy bridging the gap between engineering and creativity — combining my technical knowledge with my drive to solve problems in new and innovative ways to solve complex problems. My goal is to learn as much as I can and create cool innovative applications that are efficient, user friendly and adaptable. When I'm not in front of a computer screen, I'm probably skiing, playing ice hockey, or hanging out with my friends and family.
            </p>
            </div>
        </div>
    </div>
)

export default Intro