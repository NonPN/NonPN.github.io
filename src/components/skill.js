import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'
import java from '../images/java.svg'
import js from '../images/js.svg'
import gopher from '../images/gopher.svg'
import csharp from '../images/csharp.svg'
import html from '../images/html.svg'
import css from '../images/css.svg'
import node from '../images/node.svg'
import react from '../images/react.svg'
import gear from '../images/gear.svg'

const Block = styled.div`
    margin: 2.5rem;
    margin-top: 5rem;
    margin-left: auto;
    margin-right: auto;
    padding: 1.5rem;
    width: 1000px;
    position: relative;
    border-style: solid;
    border-width: 0.5rem;
    border-radius: 2rem;
    border-image: 
    linear-gradient(
      to bottom, 
      #969ae4, 
      #fbd5b1
    ) 1;

    @media (max-width: 768px) {
        width: 600px;
    }
`
const Title = styled.h3`
    font-family: sans-serif;
    font-size: 25px;
    color: grey;
    padding-left: 20px;
    margin: 20px;
`
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const Head = styled.h1`
    font-family: 'Archivo Black', sans-serif;
    padding: 1rem;
    background: #fcfbfc;
    color: #ffba4a;
    position: absolute;
    top: -10%;
`
const Gear = styled.img`
    width: 48px;
    margin: 15px;
    animation: 3s linear 0s infinite rotate;

    @keyframes rotate {
       100% {
            transform: rotate(360deg)
       }
    }
`
const Logo = styled.img`
    margin: 30px;
    transition: transform 300ms ease-in;

    &:hover {
        transform: scale(1.3)
    }
`

export default class Skill extends Component {
    render() {
        return (
            <Fade bottom>
                <Block>
                    <Head>SKILLS</Head>
                    <Title>Programming Language</Title>
                    <Container>
                        <Logo src={java} />
                        <Logo src={js} />
                        <Logo src={csharp} />
                        <Logo src={gopher} />
                    </Container>
                    <hr />
                    <Title>Web appilcation</Title>
                    <Container>
                        <Logo src={html} />
                        <Logo src={css} />
                        <Logo src={node} />
                        <Logo src={react} />
                    </Container>
                </Block>
            </Fade>
        )
    }
}

// class DropdownLogo extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             dropdownOpen: false
//         }
//     }

//     toggle = () => {
//         this.setState(prevState => ({
//             dropdownOpen: !prevState.dropdownOpen
//         }));
//     }

//     enlarge = () => {
//         document.getElementById(this.props.id).setAttribute("height", "130px")
//         document.getElementById(this.props.id).setAttribute("width", "130px")
//     }

//     minimize = () => {
//         document.getElementById(this.props.id).setAttribute("height", "100px")
//         document.getElementById(this.props.id).setAttribute("width", "100px")
//     }

//     render() {
//         return (
//             <Logo onMouseOver={this.enlarge} onMouseLeave={this.minimize}>
//                 <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
//                     <DropdownToggle color="white"><img id={this.props.id} src={this.props.logo} />
//                     </DropdownToggle>
//                 </Dropdown>
//             </Logo>
//         )
//     }
// }