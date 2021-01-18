import React from 'react'
import styled, { keyframes } from 'styled-components'

const Box = styled.div`
    width: 100%;
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
    font-size: 4em;

    @media (max-width: 768px) {
        font-size: 3em;
    }

`
const Hr = styled.hr`
    width: 20%;
    min-width: 280px;
    border-color: whitesmoke;
`
const Des = styled.h3`
    color: white;
    font-family: 'Archivo Narrow', sans-serif;
    font-size: 2em;

    @media (max-width: 768px) {
        font-size: 1em;
    }
`
const RecLine = styled.div`
      width: 100%;
      display: flex;
      padding-top: 15px;
`
const Rec = styled.div`
    width: 1%;
    margin: 10px;
    height: 20px;
    box-sizing: border-box;
    background-color: #ff7f23;
    animation: 3s ease-out infinite pulse;

    @keyframes pulse {
        0% {
            transform: scaleY(1);
            background-color: #ff7f23;
        }
        25% {
            transform: scaleY(1.5)
        }
        50% {
            background-color: #ffd026
        }
        75% {
            transform: scaleY(0.5)
        }
        100% {
            transform: scaleY(1);
            background-color: #ff7f23;
        }
    }
`

const Head = () => {

    const genRec = () => {
        let arr = []
        for (let i = 0; i < 50; i++) {
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
                    <Hr/>
                    <Des>Software Developer</Des>
                    <RecLine>
                        {genRec()}
                    </RecLine>
                </Line>
            </Box>
        </div>
    )
}

export default Head