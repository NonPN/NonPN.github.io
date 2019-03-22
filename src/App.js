import React, { Component } from 'react';
import Head from './components/head'
import styled from 'styled-components'

const Block = styled.div`
  display: block;
`
class App extends Component {
  render() {
    return (
      <Block>
        <Head />
      </Block>
    );
  }
}

export default App;
