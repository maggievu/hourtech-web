import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
// import cyan from '@material-ui/core/colors/cyan'
// import blue from '@material-ui/core/colors/blue'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import './App.css'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#13bcd4',
      light: '#5ac7d9',
      lightest: '#b7e3ec',
    },
    secondary: {
      main: '#154b9c',
      light: '#478fcc',
    },
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
