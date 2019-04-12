import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import axios from 'axios'
import { Button } from '@material-ui/core'

const styles = (theme) => ({

})

class Oauth extends Component {
	render() {
		return (
			<Button id="oauth">
				SignIn
			</Button>
		)
	}
}

export default withStyles(styles)(Oauth)
