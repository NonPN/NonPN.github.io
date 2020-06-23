import React, { Component } from 'react'
import styled from 'styled-components'
import { Table } from 'reactstrap'
import contact from '../images/contact.png'
import linkedin from '../images/linkedin.svg'
import github from '../images/github.svg'
import mail from '../images/mail.svg'
import phone from '../images/phone.svg'

const Block = styled.div`
    width: 500px;
`
const InBlock = styled.div`
    margin: 30px;
`
const Line = styled.div`
    background-color: #24cfff;
    border-styled: solid;
`
const InLine = styled.div`
    display : flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 20px;
`
const Ico = styled.img`
    float: right;
`

const Title = styled.h3`
    font-family: 'Archivo Black', sans-serif;
    font-size: 24px;
    color: white;
    margin-right: 30px;
    padding-top: 10px;
`
const TdHover = styled.td`
    :hover {
        cursor: pointer;
    }
`

export default class Contact extends Component {

    linkClicked = () => {
        window.open('https://www.linkedin.com/in/non-puthikanon/', '_blank')
    }

    ghClicked = () => {
        window.open('https://github.com/NonPN', '_blank')
    }

    render() {
        return (
            <Block>
                <InBlock>
                    <Line>
                        <InLine>
                            <Title>Contact</Title>
                            <img style={{ width: 32, height: 32, marginRight: 15 }} src={contact} />
                        </InLine>
                    </Line>
                    <Table hover>
                        <tbody>
                            <tr>
                                <th>Email</th>
                                <TdHover>non.pu@ku.th<Ico src={mail} /></TdHover>
                            </tr>
                            <tr>
                                <th>LinkedIn</th>
                                <TdHover onClick={this.linkClicked}>Non Puthikanon<Ico src={linkedin} /></TdHover>
                            </tr>
                            <tr>
                                <th>Github</th>
                                <TdHover onClick={this.ghClicked}>NonPN<Ico src={github} /></TdHover>
                            </tr>
                            <tr>
                                <th>Tel.</th>
                                <TdHover>+66894408886<Ico src={phone} /></TdHover>
                            </tr>
                        </tbody>
                    </Table>
                </InBlock>
            </Block>
        )
    }
}