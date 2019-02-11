import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core'
import Logo from '@material-ui/icons/Image'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
})

const MenuBar = (props) => {

  const { classes } = props;
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Logo />
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Logo - HourTech
          </Typography>
          <IconButton color="inherit">
            Item 1
          </IconButton>
          <IconButton color="inherit">
            Item 2
          </IconButton>
          <IconButton color="inherit">
            Item 3
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

MenuBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MenuBar)
