import React from 'react'
import { Link } from "gatsby"
// import { auto } from 'eol'
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome'
// import { faLinkedin, faMedium, faGithub, } from '@fontawesome/free-brands-svg-icons'


class TopMenu extends React.Component{
    state ={
        scrolled: true
    }

  componentDidMount(){
    window.addEventListener('scroll', ()=> {
      const isTop = window.scrollY > 170
      if (isTop){
            console.log("scrolled: ", false)
            this.setState({scrolled:false})
      }else{
            console.log("scrolled: ", true)
            this.setState({ scrolled: true })
      }
    })}
    
    render(){
        if (this.state.scrolled){
            return(
                <div>
                    <div style={{ background: `rgb(72,72,72)`, width: '100%' }}>
                        <ul style={{display:'flex', justifyContent:'space-around' }}>
                            <li style={{display:'flex', }}> 
                                <Link style={{color: 'rgb(255, 255, 255)',  textDecoration: 'none', fontSize: '13px'}} to="/#Home"> Home </Link>
                            </li>
                            <li style={{display:'flex', }}>
                                <Link style={{ color: 'rgb(255, 255, 255)', textDecoration: 'none', fontSize: '13px'}} to="/#Projects">Projects </Link>
                            </li>
                            <li style={{display:'flex', }}>
                                <Link style={{ color: 'rgb(255, 255, 255)', textDecoration: 'none', fontSize: '13px' }} to="/#Contact">Contact Me </Link>
                            </li>
                            <li style={{ display: 'flex' }}>
                                <a style={{ verticalAlign: 'middle', color: 'rgb(255, 255, 255)', textDecoration: 'none', fontSize: '13px' }} href="https://drive.google.com/file/d/1n-sDjof1IFBd9TT13Hc0PEyxTdJZ-sJz/view?usp=sharing" target="_blank"> Resume </a>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        }else{
            return (
                <div>
                    <div style={{ background: `rgb(72,72,72)`, width: '100%', position:'fixed', paddingTop: '1vw', top: 0}}>
                        <ul style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 0}}>
                            <li style={{ display: 'flex' }}>
                                <Link style={{  verticalAlign:'middle', color: 'rgb(255, 255, 255)', textDecoration: 'none', fontSize: '13px' }} to="/#Home"> Home </Link>
                            </li>
                            <li style={{ display: 'flex' }}>
                                <Link style={{  verticalAlign:'middle', color: 'rgb(255, 255, 255)', textDecoration: 'none', fontSize: '13px' }} to="/#Projects">Projects </Link>
                            </li>
                            <li style={{ display: 'flex' }}>
                                <Link style={{  verticalAlign:'middle', color: 'rgb(255, 255, 255)', textDecoration: 'none', fontSize: '13px' }} to="/#Contact">Contact Me </Link>
                            </li>
                            <li style={{ display: 'flex' }}>
                                <a style={{ verticalAlign: 'middle', color: 'rgb(255, 255, 255)', textDecoration: 'none', fontSize: '13px' }} href="https://drive.google.com/file/d/1n-sDjof1IFBd9TT13Hc0PEyxTdJZ-sJz/view?usp=sharing" target="_blank"> Resume </a>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            )
        }
    }
}    

export default TopMenu
