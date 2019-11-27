import React from "react"
// import { Link } from "gatsby"
import Projects from '../components/projects'
import Skills from '../components/skills'
import Contact from '../components/contact'
import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component{ 
  

  render(){
    return(
      <Layout>
        <SEO title="Home" />
        <div id="Home" style={{paddingBottom:'6vw'}}>
          <p>Hi my name is </p>
          <h1>Mason Balbera.</h1>
          <h2>I build applications for the internet and mobile platforms.</h2>
          <p>Full stack web and mobile developer with an eagerness to build and create technology.  With experience in Ruby on Rails, JavaScript, and React, I discovered web development through my education and my curiosity to learn. I bring strong skills in communicating complex concepts, understanding the needs of individual consumers and businesses, as well developing solutions to meet those needs.</p>
        </div>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, paddingBottom: '6vw' }}>
          <h6>Background</h6>
          <p> 
            I recently graduated from The Flatiron School’s immersive program in New York City. As a software engineer, I enjoy bridging the gap between engineering and creativity — combining my technical knowledge with my drive to solve problems in new and innovative ways to solve complex problems. My goal is to learn as much as I can and create cool innovative applications that are efficient, user friendly and adaptable. When I'm not in front of a computer screen, I'm probably skiing, playing ice hockey, or hanging out with my friends and family.
          </p>
        </div>
        <div style={{paddingBottom:'6vw'}}>
          <Projects/>
        </div>
        <div style={{paddingBottom:'6vw'}}>
          <Skills/>
        </div>
        <div style={{paddingBottom:'6vw'}}>
          <Contact/>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
