import React from 'react'
import SEO from './seo'

class Contact extends React.Component{
    state = {
        name: "",
        email: "",
        body: ""
    }

    handleChange = (event)=> {
        this.setState({ 
            [event.target.name]: event.target.value 
        });
    }

    handleSubmit = (event)=> {
        event.preventDefault();
        
        this.setState({
            name: "",
            email: "",
            body: ""
        })
    }

    render(){
    return(
        <div>
        <div>
            <div  style={{width:'auto'}}>
                <SEO title='contact' />
                <h2 style={{textAlign:'center'}}>Contact Me</h2>
                <div style={{ borderStyle: 'solid', borderRadius: '15%', justifyContent:'center' }}>
                    {/* <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: '3vw', paddingBottom:'3vw'}}> */}
                        <div style={{ width:'auto', borderRadius: '10%', display: 'flex', justifyContent: 'center', paddingTop:'2vw'}}>
                        <input name="name" onChange={this.handleChange} placeholder="Name" value={this.state.name} type="text"/>
                        </div>
                    <div style={{ borderRadius: '10%', display: 'flex', justifyContent: 'center', paddingTop: '2vw'}}>
                        <input name="email"  onChange={this.handleChange} placeholder="Email" value={this.state.email} type="text"/>
                        </div>
                    {/* </div> */}
                    <div style={{ display: 'flex', justifyContent: 'space-around', margin: 'auto', paddingTop: '2vw'  }}>
                        <textarea name="body" onChange={this.handleChange} rows='5' value={this.state.body} placeholder="Say Hi!"></textarea>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: '3vw', paddingBottom: '3vw'}}>
                        {/* <button onClick={this.handleSubmit} style={{color:'rgb(255,255,255)', background:'rgb(17,17,17)', borderRadius:'10%',}}>Send</button> */}
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
    }
}

export default Contact