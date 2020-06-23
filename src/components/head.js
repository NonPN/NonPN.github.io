import React from 'react'
import styled, { keyframes } from 'styled-components'
import hbg from '../images/hbg.png'

const Box = styled.div`
    width: 100%;
    height: 200px;
    align-items: center;
    background-color: #ff7f23;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    animation: 1s ease-out 0s 1 dropDown;

    @keyframes dropDown {
        from {
            transform: translateY(-100%);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
      }
`
const Line = styled.div`
    display: block;
    text-align: center;
    padding-top: 50px;
    margin-bottom: 20px;
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
const RecLine = styled.div`
      width: 100%;
      display: flex;
`
const Rec = styled.div`
    width: 1%;
    height: 50px;
    box-sizing: border-box;
    background-color: #ff7f23;
    animation: 3s ease-out infinite pulse;

    @keyframes pulse {
        0% {
            transform: scaleY(1)
        }
        25% {
            transform: scaleY(1.5)
        }
        75% {
            transform: scaleY(0.5)
        }
        100% {
            transform: scaleY(1)
        }
    }
`

const Head = () => {

    const genRec = () => {
        let arr = []
        for (let i = 0; i < 100; i++) {
            arr.push(i)
        }
        return arr.map((i) => (
            <Rec style={{ animationDelay: i * 0.15 + 1 + 's' }} key={i} />
        ))
    }

    return (
        <div>
            <Box>
                <Line>
                    <Name>Non Puthikanon</Name>
                    <Des>Software Developer</Des>
                </Line>
            </Box>
        </div>
    )
}

export default Head