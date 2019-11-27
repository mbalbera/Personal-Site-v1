import React from 'react'
import SEO from "./seo"


const Project = (props) => (
    <div>
        <SEO title={props.title} />
        <h4>{props.title}</h4>
        {/* <img></img> */}
    </div>
)

export default Project