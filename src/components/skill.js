import React, {Component} from 'react'
import styled from 'styled-components'
import java from '../images/java.svg'
import js from '../images/js.svg'
import cprog from '../images/cprog.svg'
import python from '../images/python.svg'
import html from '../images/html.svg'
import css from '../images/css.svg'
import node from '../images/node.svg'
import react from '../images/react.svg'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Block = styled.div`
    margin-left: 470px;
    margin-right: 470px;
`
const TitleLine = styled.div`
    padding-top: 30px;
`
const Title = styled.h3`
    font-family: 'Archivo Black', sans-serif;
    font-size: 25px;
    margin: 20px;
`
const Container = styled.div`
    display: flex;
    justify-content: center;
`
const HeadLine = styled.div`
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: #ff9b21;
`

const Head = styled.h3`
    font-family: 'Archivo Black', sans-serif;
    margin: 20px;
    padding-top: 30px;
`

const Logo = styled.div`
    margin: 20px;
`

export default class Skill extends Component {
    render() {
        return(
            <Block>
                <HeadLine><Head>Skills</Head></HeadLine>
                <TitleLine><Title>Programming Language</Title></TitleLine>
                <Container>
                    <DropdownLogo id='java' logo={java}/>
                    <DropdownLogo id='js' logo={js}/>
                    <DropdownLogo id='cprog' logo={cprog}/>
                    <DropdownLogo id='python' logo={python}/>
                </Container>
                <hr/>
                <TitleLine><Title>Web appilcation</Title></TitleLine>
                <Container>
                    <DropdownLogo id='html' logo={html}/>
                    <DropdownLogo id='css' logo={css}/>
                    <DropdownLogo id='node' logo={node}/>
                    <DropdownLogo id='react' logo={react}/>
                </Container>
            </Block>
        )
    }
}

class DropdownLogo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdownOpen: false
        }
    }

    toggle = ()=> {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
    }

    enlarge = ()=> {
        document.getElementById(this.props.id).setAttribute("height", "130px")
        document.getElementById(this.props.id).setAttribute("width", "130px")
    }

    minimize = ()=> {
        document.getElementById(this.props.id).setAttribute("height", "100px")
        document.getElementById(this.props.id).setAttribute("width", "100px")
    }

    render() {
        return(
            <Logo onMouseOver={this.enlarge} onMouseLeave={this.minimize}>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle color="white"><img id={this.props.id} src={this.props.logo}/>
                    </DropdownToggle>
                </Dropdown>
            </Logo>
        )
    }
}