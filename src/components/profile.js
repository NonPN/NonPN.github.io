import React, { Component } from 'react'
import styled from 'styled-components'
import { Table } from 'reactstrap'
import user from '../images/user.png'

const Block = styled.div`
    width: 500px;
`
const InBlock = styled.div`
    margin: 30px;
`
const Line = styled.div`
    background-color: #24cfff;
`
const InLine = styled.div`
    margin-left: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Title = styled.h3`
    font-family: 'Archivo Black', sans-serif;
    font-size: 24px;
    color: white;
    margin-right: 30px;
    padding-top: 10px;
`

export default class Profile extends Component {
    render() {
        return (
            <Block>
                <InBlock>
                    <Line>
                        <InLine>
                            <Title>Profile</Title>
                            <img style={{ width: 32, height: 32, marginRight: 15 }} src={user} />
                        </InLine>
                    </Line>
                    <Table>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td>Non Puthikanon</td>
                            </tr>
                            <tr>
                                <th>Date of Birth</th>
                                <td>09 April 1998</td>
                            </tr>
                            <tr>
                                <th>Nationality</th>
                                <td>Thai</td>
                            </tr>
                            <tr>
                                <th>Gender</th>
                                <td>male</td>
                            </tr>
                        </tbody>
                    </Table>
                </InBlock>
            </Block>
        )
    }
}