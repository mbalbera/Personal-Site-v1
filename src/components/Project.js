import React from 'react'
import SEO from "./seo"
import Video from "./video"



const Project = (props) => (
    <div>
        <SEO title={props.title} />
        <h4>{props.title}</h4>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Video {...props}/>
            <div style={{ paddingLeft: '2vw' }}>
            <h6 style={{}}>{props.description}</h6>
            <h6 style={{color: 'rgb(88,88,88)'}}>{props.technologies}</h6>
            </div>
        </div>
    </div>
)

export default Project