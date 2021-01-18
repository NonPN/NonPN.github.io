import React, { Component } from 'react'
import styled from 'styled-components'
import me from '../images/me.jpg'
import info from '../images/info.svg'

const Body = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const Me = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-image: url(${me});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    animation: 1s ease-out 0s 1 popIn;

    @keyframes popIn {
        0% {
          transform: scale(0.1);
        }
        100% {
          transform: scale(1);
        }
      }
`
const Des = styled.div`
    height: 360px;
    width: 580px;
    padding-top: 25px;
    padding-left: 50px;
    display: block;
`
const InDes = styled.div`
    border-radius: 23px;
    background: linear-gradient(315deg, #ffd6af, #9198e5);
`
const BStroke = styled.div`
    width: 380px;
    height: 380px;
    margin-top: 100px;
    margin-bottom: 100px;
    margin-right: 40px;
    background-color: whitesmoke;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Circle = styled.div`
    width: 360px;
    height: 360px;
    background: linear-gradient(#24cfff, #9198e5);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: 1s ease-out 0s 1 zoomIn;

    @keyframes zoomIn {
        0% {
          transform: scale(0.1);
        }
        80% {
          transform: scale(1.2);
        }
        100% {
          transform: scale(1);
        }
      }

`
const Stroke = styled.div`
    width: 325px;
    height: 325px;
    background-color: whitesmoke;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const P = styled.p`
    margin: 30px;
    color: white;
    font-family: 'Archivo Narrow', sans-serif;
`
const Title = styled.h2`
    font-family: 'Archivo Black', sans-serif;
    font-size: 35px;
`

export default class About extends Component {
    render() {
        return (
            <Body>
                <BStroke>
                    <Circle>
                        <Stroke>
                            <Me />
                        </Stroke>
                    </Circle>
                </BStroke>
                <Des>
                    <Title>About me<img style={{ width: 32, marginLeft: 10 }} src={info} /></Title>
                    <InDes>
                        <P>
                            <br />Hello, My name is Non Puthikanon.<br /><br />
                            I am a freshly graduated student of software and knowledge engineering
                            at Kasetsart University. <br></br>I am really eager to learn new stuff
                            and develop cool things.<br /><br />
                        </P>
                    </InDes>
                </Des>
            </Body>
        )
    }
}