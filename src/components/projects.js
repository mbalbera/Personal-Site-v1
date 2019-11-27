import React from 'react'
import Project from './project'
import SEO from "./seo"


class Projects extends React.Component{
    state = {
        ps:[
            {
                title: 'MicroBets',
                gif: '',
                description: ''
            },
            {
                title: 'The Fifteen Puzzle',
                gif: '',
                description: '',
            },
            {
                title: 'What Movie?',
                gif: '',
                description: '',
            }
        ]
    }


    render(){
        let mapped = this.state.ps.map(p => <Project {...p}/> )
        return(
            <div id="Projects">
                <SEO title="projects" />
                <h2>Featured Projects</h2>
                {mapped}
            </div>
        )
    }
}

export default Projects