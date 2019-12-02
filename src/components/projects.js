import React from 'react'
import Project from './project'
import SEO from "./seo"

class Projects extends React.Component{
    state={
        ps:[
            {
                title: "MicroBets",
                url: "https://www.youtube.com/embed/2HOkhi_Spoo",
                technologies: "React-Native • Ruby on Rails • Redux • The Rundown API",
                platform: "mobile",
                description: "A mobile sports-gambling platform that utilizes a swipe based user interface to introduce users to gamblers and limit the spending of experienced gamblers."
            },
            {
                title: "The Fifteen Puzzle",
                url: "https://www.youtube.com/embed/GiP65DhUKQY",
                technologies: "Javascript • Ruby on Rails • Custom CSS",
                platform: "web",
                description: "A sliding puzzle that trains spatial awareness and cognitive skills with fifteen randomly arranged tiles and one empty tile."
            },
            {
                title: "What Movie?",
                url: "https://www.youtube.com/embed/d01bNS1tdvE",
                technologies: "Ruby on Rails • Semantic UI",
                platform: "web",
                description: "A game consisting of five random movie quotes and four possible choices for each quote testing cinematic knowledge."
            }
        ]
    }

    render(){
        let mapped = this.state.ps.map(p => <Project {...p}/> )
        return(
            <div >
                <SEO title="projects" />
                <h2>Featured Projects</h2>
                <div>
                    {mapped}
                </div>
            </div>
        )
    }
}

export default Projects