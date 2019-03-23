import React, { Component } from 'react';
import Head from './components/head'
import About from './components/about'
import styled from 'styled-components'

const Block = styled.div`
  display: block;
`
class App extends Component {
  render() {
    return (
      <Block>
        <Head />
        <About />
      </Block>
    );
  }
}

export default App;
