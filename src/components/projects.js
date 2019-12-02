import React from 'react'
import Project from './project'
import SEO from "./seo"
import Projs from "../../data/projects"


class Projects extends React.Component{

    render(){
        let mapped = Projs.map(p => <Project {...p}/> )
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