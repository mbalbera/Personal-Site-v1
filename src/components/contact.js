import React from 'react'
import SEO from './seo'


const Contact = () => (
    <div id="Contact">
        <SEO title='contact' />
        <h2>Contact Me</h2>
        <div class="ui large form">
            <div class="two fields">
                <div class="field">
                    <label>Name</label>
                    <input placeholder="Name" type="text"/>
                </div>
                    <div class="field">
                        <label>Email</label>
                        <input placeholder="Email" type="text"/>
                    </div>
            </div>
                <div class="large field">
                    <label>Body</label>
                    <textarea></textarea>
                </div>
                    <div class="ui submit button">Submit</div>
        </div>
    </div>
)

export default Contact