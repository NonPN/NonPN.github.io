import React, { Component } from 'react';
import Head from './components/head'
import About from './components/about'
import Profile from './components/profile'
import Contact from './components/contact'
import Skill from './components/skill'
import styled from 'styled-components'
import { Fade } from 'reactstrap'

const Block = styled.div`
  display: block;
`
const Row = styled.div`
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 768px) {
    width: 600px;
    flex-direction: column;
  }
`

class App extends Component {

  render() {
    return (
      <Block>
        <Head />
        <Fade in={true}>
          <About />
          <Row>
            <Profile />
            <Contact />
          </Row>
          <Skill />
        </Fade>
      </Block>
    );
  }
}

export default App;
