import React from 'react'

const Intro = ({colorScheme}) => {
    let sty
    if (colorScheme === '0'){
        sty = { backgroundColor: 'rgb(255,255,255)', color: 'rgb(17,17,17)' }
    } else if (colorScheme === '1'){
        sty = { backgroundColor: 'rgb(72,72,72)', color: 'rgb(255,255,255)' }
    }else{
        sty = { backgroundColor: 'rgb(x,x,x)', color: 'rgb(y,y,y)' }
    }
    console.log(sty)
    return (
        <div style={sty}>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div style={{  marginBottom: `1.45rem`, paddingBottom: '6vw', paddingRight: '2vw' }}>
                    <h2>Background</h2>
                    <p>
                        I recently graduated from The Flatiron School’s immersive program in New York City. As a software engineer, I enjoy bridging the gap between engineering and creativity — combining my technical knowledge with my drive to solve problems in new and innovative ways. My goal is to learn as much as I can and create cool innovative applications that are efficient, user friendly and scalable. When I'm not in front of a computer screen, I'm probably skiing, playing ice hockey, or hanging out with my friends and family.
                </p>
                </div>
            </div>
        </div>
    )  
} 

export default Intro