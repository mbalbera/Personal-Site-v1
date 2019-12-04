import React from "react"
// import { Link } from "gatsby"
import Projects from '../components/projects'
import Skills from '../components/skills'
import Contact from '../components/contact'
import Layout from "../components/layout"
import Divider from "../components/divider"
import SEO from "../components/seo"

class IndexPage extends React.Component{ 
  

  render(){
    return(
      <Layout>
        <SEO title="Home" />
        <div id="Home" style={{paddingBottom:'3vw', paddingTop:'3vw'}}>
          <p>Hi my name is </p>
          <h1>Mason Balbera.</h1>
          <h2>I build applications for the internet and mobile platforms.</h2>
          <p>Full stack web and mobile developer with an eagerness to build and create technology.  With experience in Ruby on Rails, JavaScript, and React, I discovered web development through my education and my curiosity to learn. I bring strong skills in communicating complex concepts, understanding the needs of individual consumers and businesses, as well developing solutions to meet those needs.</p>
        </div>
        <Divider id={'Background'}/>
        <div style={{display:'flex', justifyContent:'space-around'}}>
          <div style={{ width:'66%', marginBottom: `1.45rem`, paddingBottom: '6vw', paddingRight: '2vw' }}>
            <h2>Background</h2>
            <p> 
              I recently graduated from The Flatiron School’s immersive program in New York City. As a software engineer, I enjoy bridging the gap between engineering and creativity — combining my technical knowledge with my drive to solve problems in new and innovative ways to solve complex problems. My goal is to learn as much as I can and create cool innovative applications that are efficient, user friendly and adaptable. When I'm not in front of a computer screen, I'm probably skiing, playing ice hockey, or hanging out with my friends and family.
            </p>
          </div>
        </div>
        <Divider id={'Projects'}/>
        <div style={{paddingBottom:'6vw'}}>
          <Projects/>
        </div>
        <Divider />
        <div style={{paddingBottom:'6vw'}}>
          <Skills/>
        </div>
        <Divider id={'Contact'} />
        <div style={{ marginBottom: `1.45rem`, paddingBottom: '6vw', paddingRight: '8vw', paddingLeft: '8w' }}>
          <Contact />
        </div>
        <Divider />
      </Layout>
    )
  }
}

export default IndexPage
