import React from 'react'
import SEO from './seo'

const Contact = () => (
    <div 
    // id="Contact"
    >
    <div>
        <div  style={{width:'auto'}}>
            <SEO title='contact' />
            <h2 style={{textAlign:'center'}}>Contact Me</h2>
            <div style={{ borderStyle: 'solid', borderRadius: '10%', justifyContent:'center' }}>
                {/* <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: '3vw', paddingBottom:'3vw'}}> */}
                    <div style={{ width:'auto', borderRadius: '10%', display: 'flex', justifyContent: 'center', paddingTop:'2vw'}}>
                        <input placeholder="Name" type="text"/>
                    </div>
                <div style={{ borderRadius: '10%', display: 'flex', justifyContent: 'center', paddingTop: '2vw'}}>
                        <input placeholder="Email" type="text"/>
                    </div>
                {/* </div> */}
                <div style={{ display: 'flex', justifyContent: 'space-around', margin: 'auto', paddingTop: '2vw'  }}>
                    <textarea rows='5' placeholder="Say Hi!"></textarea>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: '3vw', paddingBottom: '3vw'}}>
                    <button style={{color:'rgb(255,255,255)', background:'rgb(17,17,17)', borderRadius:'10%',}}>Send</button>
                </div>
            </div>
        </div>
        </div>
    </div>
)

export default Contact