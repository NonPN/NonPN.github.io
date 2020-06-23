import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'
import java from '../images/java.svg'
import js from '../images/js.svg'
import cprog from '../images/cprog.svg'
import csharp from '../images/csharp.svg'
import python from '../images/python.svg'
import html from '../images/html.svg'
import css from '../images/css.svg'
import node from '../images/node.svg'
import react from '../images/react.svg'
import gear from '../images/gear.svg'

const Block = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 1000px;

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
    background: -webkit-linear-gradient(90deg, #ff7f23, #ffba4a 50%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 20px;
    padding-top: 30px;
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
                    <Head>SKILLS<Gear src={gear} /></Head>
                    <Title>Programming Language</Title>
                    <Container>
                        <Logo src={java} />
                        <Logo src={js} />
                        <Logo src={csharp} />
                        <Logo src={python} />
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