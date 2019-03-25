import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { fade } from '@material-ui/core/styles/colorManipulator'
import { withStyles } from '@material-ui/core/styles'
import Image from '@material-ui/icons/Image'
import logo from '../../assets/logos/logo.png' 
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'

const styles = theme => ({
  root: {
    width: '100%',
		background: theme.palette.primary.main,
		"& a": {
			color: theme.palette.common.white,
			textDecoration: 'none',
		},
		position: 'fixed',
		top: 0,
		zIndex: 1,
  },
  appBar: {
    boxShadow: 'none',
    color: theme.palette.common.white,
    paddingLeft: 0,
    paddingRight: 0,
  },
  toolBar: {
    // darkBlue: '#154b9c',
    // darkCyan: '#13bcd4',
    // lightBlue: '#478fcc',
    // lightCyan: '#5ac7d9',
    // backgroundColor: 'transparent',
    // backgroundImage: 'linear-gradient(90deg, #154b9c 0%, #0bbcd4 100%)',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
		[theme.breakpoints.down('md')]: {
			marginLeft: 15,
		},
		marginRight: 0,
		width: 60,
  },
  title: {
		fontSize: 20,
		fontWeight: 600,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
			display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
})

class NavBar extends Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  }

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleMenuClose = () => {
    this.setState({ anchorEl: null })
    this.handleMobileMenuClose()
  }

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget })
  }

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null })
  }

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state
    const { classes } = this.props
    const isMenuOpen = Boolean(anchorEl)
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    )

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMobileMenuClose}>
          <p>Features</p>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose}>
          <p>Pricing</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <p>About</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <p>Contact</p>
        </MenuItem>
      </Menu>
    )
    
    return (
      <div className={classes.root}>
        <AppBar 
          position="static" 
          className={'wrapper ' + classes.appBar}
          color="primary"
        >
          <Toolbar className={classes.toolBar}>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
              <img src={logo} alt="HourTech Logo"  />
            </IconButton>
            <Typography className={classes.title} variant="h3" color="inherit" noWrap>
              HourTech
            </Typography>
            {/* <div className={classes.search}>
              <div className={classes.searchIcon}>
							<SearchIcon />
              </div>
              <InputBase
							placeholder="Search…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							/>
            </div> */}
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Button color="inherit" style={{ marginRight: 15 }}>
								<Typography variant="h6" color="inherit" noWrap>
									<p><a href="#features">Features</a></p>
								</Typography>
              </Button>
              <Button color="inherit" style={{ marginRight: 15 }}>
								<Typography variant="h6" color="inherit" noWrap>
									<p><a href="#pricing">Pricing</a></p>
								</Typography>
              </Button>
              <Button color="inherit" style={{ marginRight: 15 }}>
								<Typography variant="h6" color="inherit" noWrap>
									<p><a href="#about">About</a></p>
								</Typography>
              </Button>
              <Button color="inherit" style={{ marginRight: 15 }}>
								<Typography variant="h6" color="inherit" noWrap>
									<p><a href="#contact">Contact</a></p>
								</Typography>
              </Button>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </div>
    )
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(NavBar)