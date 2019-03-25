import React, { Component } from 'react';
import Head from './components/head'
import About from './components/about'
import Profile from './components/profile'
import Contract from './components/contract'
import Skill from './components/skill'
import styled from 'styled-components'
import {Fade} from 'reactstrap'

const Block = styled.div`
  display: block;
`
const Row = styled.div`
  display: flex;
  justify-content: center;
`

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      fadeIn: true
    }
  }

  toggle = ()=> {
    this.setState({
      fadeIn: !this.state.fadeIn
    })
  }

  render() {
    return (
      <Block>
        <Head />
        <Fade>
          <About />
          <Row>
            <Profile />
            <Contract />
          </Row>
          <Skill />
        </Fade>
      </Block>
    );
  }
}

export default App;
