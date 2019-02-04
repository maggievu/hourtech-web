import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
// import MenuIcon from '@material-ui/icons/Menu'

const styles = {
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
}

const MenuBar = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Logo - HourTech
          </Typography>
          <Button color="inherit">Item 1</Button>
          <Button color="inherit">Item 2</Button>
          <Button color="inherit">Item 3</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

MenuBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MenuBar)
