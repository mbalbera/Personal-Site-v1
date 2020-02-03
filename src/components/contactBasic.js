import React from 'react'
import SEO from './seo'

class Contact extends React.Component {
    state = {
        name: "",
        email: "",
        body: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            name: "",
            email: "",
            body: ""
        })
    }

    render() {
        return (
            <div>
                <a HREF="mailto:name@mydomain.com">Click Here To Email Me</a>                       
            </div>
        )
    }
}

export default Contact