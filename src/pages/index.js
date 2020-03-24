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
    colorScheme: 0
  }

  changeColors = (e) => {
    console.log('changing colors!')
    console.log('new color', e.target.value)
    console.log('old color',this.state.colorScheme)
    if(e.target.value === '0'){
      console.log("light mode")
    }else if(e.target.value === '1'){
      console.log("dark mode")
    }else if(e.target.value === '2'){
      console.log("colorful mode")
    }
    let colorScheme = e.target.value
    this.setState({colorScheme})
  }

  render(){
    return(
      <Layout changeColors={this.changeColors} colorScheme={this.state.colorScheme}>
        <Intro/>
        <Divider id={'Background'}/>
        <Background/>
        <Divider id={'Projects'}/>
          <Projects/>
        <Divider />
          <Skills/>
        <Divider id={'Contact'} />
          <ContactBasic />
          {/* <Contact /> */}
        <Divider />
        <div>
          <p style={{color:'grey', fontSize:10}}>
            Built with Gatsby.js
          </p>
        </div>
        <SEO title="Home" />
      </Layout>
    )
  }
}

export default IndexPage
