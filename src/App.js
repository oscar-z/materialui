import React, { Component } from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
// import Bookmarks from '@material-ui/icons/Bookmarks'
import TextField from '@material-ui/core/TextField'
import Camera from '@material-ui/icons/Camera'  
import NavBar from './Navbar'
import { purple, blue, green } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: purple
  }
}) 

class App extends Component { 
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <NavBar/>
          <Button variant="contained" color="primary">
            <Camera></Camera>
              Welcome to Material UI
          </Button>
          <TextField placeholder="Enter your Name" label="Basic TextField"></TextField>
      </MuiThemeProvider>
    )
  }
}

export default App;
