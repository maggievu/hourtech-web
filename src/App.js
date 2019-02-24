import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import './App.css'

const theme = createMuiTheme({
  palette: {
    primary: grey,
    // secondary: 'purple',
  },
  status: {
    danger: 'orange',
  },
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <Main />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App
