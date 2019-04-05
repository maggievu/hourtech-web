import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Button, Typography  } from '@material-ui/core'
// import InputBase from '@material-ui/core/InputBase'
import { fade } from '@material-ui/core/styles/colorManipulator'
import { withStyles } from '@material-ui/core/styles'
import logo from '../../assets/logos/logo.png' 
import MenuIcon from '@material-ui/icons/Menu'
// import SearchIcon from '@material-ui/icons/Search'

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
  grow: {
    flexGrow: 1,
  },
  menuButton: {
		[theme.breakpoints.down('md')]: {
			marginLeft: 15,
		},
		marginRight: 0,
		width: 40,
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
		'&>a': {
			marginRight: 15,
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
        <MenuItem onClick={this.handleMobileMenuClose} href='#features' component='button'>
					Features
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose} href='#pricing' component='button'>
					Pricing
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose} href='#about' component='button'>
					About
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose} href='#contact' component='button'>
					Contact
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
          <Toolbar>
						<IconButton href="https://hourtech.ca" className={classes.menuButton} color="inherit" aria-label="Open drawer">
              <img src={logo} alt="HourTech Logo" />
            </IconButton>
            <h1 className={classes.title}>
              HourTech
            </h1>
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
							<Button href="#features" color="inherit">
								<Typography variant="h6" color="inherit" noWrap>
									Features
								</Typography>
              </Button>
              <Button href="#pricing" color="inherit">
								<Typography variant="h6" color="inherit" noWrap>
									Pricing
								</Typography>
              </Button>
              <Button href="#about" color="inherit">
								<Typography variant="h6" color="inherit" noWrap>
									About
								</Typography>
              </Button>
              <Button href="#contact" color="inherit">
								<Typography variant="h6" color="inherit" noWrap>
									Contact
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