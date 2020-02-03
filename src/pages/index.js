import React from "react"
// import { Link } from "gatsby"
import Projects from '../components/projects'
import Skills from '../components/skills'
import Contact from '../components/contact'
import ContactBasic from '../components/contactBasic'
import Layout from "../components/layout"
import Intro from "../components/intro"
import Background from "../components/background"
import Divider from "../components/divider"
import SEO from "../components/seo"

class IndexPage extends React.Component{ 
  
  state = {
    darkMode: true
  }

  toggleDarkMode = () => {
    let darkMode = !this.state.darkMode
    this.setState({darkMode})
  }

  render(){
    return(
      <Layout switchHandler={this.toggleDarkMode} darkMode={this.state.darkMode}>
        <SEO title="Home" />
        <Intro/>
        <Divider id={'Background'}/>
        <Background/>
        <Divider id={'Projects'}/>
          <Projects/>
        <Divider />
          <Skills/>
        <Divider id={'Contact'} />
          {/* <Contact /> */}
          <ContactBasic />
        <Divider />
        <div>
          <p style={{color:'grey', fontSize:10}}>
            Built with Gatsby.js
          </p>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
