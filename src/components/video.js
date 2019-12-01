import React from "react"
const Video = (props) => (
    <div className="video">
        <iframe
            src={props.url}
            title={props.title}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
        />
    </div>
)
export default Video