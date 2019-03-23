import React, {Component} from 'react'
import styled from 'styled-components'
import {Table} from 'reactstrap'
import contract from '../images/contract.png'
import fbico from '../images/facebook.svg'
import github from '../images/github.svg'
import mail from '../images/mail.svg'

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
    padding-bottom: 10px;
`
const InLine = styled.div`
    display : flex;
    margin-left: 20px;
`

const Img = styled.img`
    height: 50px;
    width: 45px;
    padding-top: 10px;
    margin-right: 30px;
`
const Ico = styled.img`
    float: right;
`

const Title = styled.h3`
    font-family: 'Archivo Black', sans-serif;
    font-size: 35px;
    margin-right: 30px;
    padding-top: 10px;
`
const TdHover = styled.td`
    :hover {
        cursor: pointer;
    }
`

export default class Contract extends Component {

    fbClicked = ()=> {
        window.location.href = 'https://www.facebook.com/nonPuthikanon';
    }

    ghClicked = ()=> {
        window.location.href = 'https://github.com/NonPN';
    }

    render() {
        return(
            <Block>
                <InBlock>
                    <Line>
                        <InLine>
                            <Title>Contract Me</Title>
                            <Img src={contract}/>
                        </InLine>
                    </Line>
                    <Table hover>
                        <tbody>
                            <tr>
                                <th>Email</th>
                                <TdHover>non9441@gmail.com<Ico src={mail}/></TdHover>
                            </tr>
                            <tr>
                                <th>Facebook</th>
                                <TdHover onClick={this.fbClicked}>Non Puthikanon<Ico src={fbico}/></TdHover>
                            </tr>
                            <tr>
                                <th>Github</th>
                                <TdHover onClick={this.ghClicked}>NonNP<Ico src={github}/></TdHover>
                            </tr>
                        </tbody>
                    </Table>
                </InBlock>
            </Block>
        )
    }
}