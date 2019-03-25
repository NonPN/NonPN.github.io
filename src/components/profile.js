import React, {Component} from 'react'
import styled from 'styled-components'
import {Table} from 'reactstrap'
import head from '../images/head.svg'

const Block = styled.div`
    width: 500px;
    border-top: solid 6px orange;
    border-bottom: solid 6px orange;
`
const InBlock = styled.div`
    margin: 30px;
`
const Line = styled.div`
    background-color: #5eb1ff;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-styled: solid;
`
const InLine = styled.div`
    margin-left: 20px;
    display: flex;
`

const Title = styled.h3`
    font-family: 'Archivo Black', sans-serif;
    font-size: 35px;
    margin-right: 30px;
    padding-top: 10px;
`

export default class Profile extends Component {
    render() {
        return(
            <Block>
                <InBlock>
                    <Line>
                        <InLine>
                            <Title>Profile</Title>
                            <img src={head}/>
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
                                    <th>Sex</th>
                                    <td>male</td>
                                </tr>
                            </tbody>
                        </Table>
                </InBlock>
            </Block>
        )
    }
}