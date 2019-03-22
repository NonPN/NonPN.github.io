import React, {Component} from 'react'
import styled from 'styled-components'
import hbg from '../images/hbg.png'

const Box = styled.div`
    width: 100%;
    height: 200px;
    background-color: #ff7f23;
    display: flex;
    justify-content: center;
`
const Line = styled.div`
    display: block;
    text-align: center;
`

const Name = styled.h1`
    color: white;
    font-family: 'Archivo Black', sans-serif;
    font-size: 60px;
`
const Des = styled.h3`
    color: white;
    font-family: "Comic Sans MS", cursive, sans-serif;
    font-size: 32px;
`

const Img = styled.img`
  width: 100%;
`

export default class Head extends Component {
    render(){
        return(
            <div>
                <Box>
                    <Line>
                        <Name>Non Puthikanon</Name>
                        <Des>Software Developer</Des>
                    </Line>
                </Box>
                <Img src={hbg}/>
            </div>
            
        )
    }
}