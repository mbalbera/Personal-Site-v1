import React from 'react'
import Project from './project'
import SEO from "./seo"


class Projects extends React.Component{
    state = {
        ps:[
            {
                title: 'MicroBets',
                gif: '',
                description: 'A mobile gambling platform built with React-Native.'
            },
            {
                title: 'The Fifteen Puzzle',
                gif: '',
                description: 'A sliding ',
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
            <div >
                <SEO title="projects" />
                <h2>Featured Projects</h2>
                {mapped}
            </div>
        )
    }
}

export default Projects