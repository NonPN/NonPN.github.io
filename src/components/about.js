import React, {Component} from 'react'
import styled from 'styled-components'
import me from '../images/me.svg'

const Body = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
`
const Me = styled.img`
    margin-right: 130px;
`
const Des = styled.div`
    height: 378px;
    width: 580px;
    margin-top: 80px;
    padding-top: 25px;
    padding-left: 50px;
    display: block;
    background-color: #ffc896;
    border-radius: 25px;
`
const InDes = styled.div`
    background-color: #ffd6af;
    border-radius: 23px;
    margin-right: 20px;
`
const P = styled.p`
    margin: 25px;
`

const Rbot = styled.div`
    height: 45px;
    width: 45px;
    content: "";
    background-color: #ff9330;
    border-left: 8px solid white;
    border-top: 8px solid white;
    float: right;
`

const Title = styled.h2`
    font-family: 'Archivo Black', sans-serif;
    font-size: 35px;
`

export default class About extends Component {
    render() {
        return(
            <Body>
                <Me src={me}/>
                <Des>
                    <Title>About me</Title>
                    <InDes>
                        <P>
                            <br />Hello, My name is Non Puthikanon.<br /><br />
                            I am currently studying software and knowledge engineering<br /><br />
                            at Kasetsart University. I am really eager to learn new stuff<br /><br />
                            and develop cool things.<br /><br />
                        </P>
                    </InDes>
                    <Rbot />
                </Des>
            </Body>
        )
    }
}