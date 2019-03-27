import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import SocialMenu from './elements/SocialMenu'
import logo from '../assets/logos/logo-cyan.png' 

const styles = theme => ({
  root: {
    background: '#000',
    color: theme.palette.primary.main,
    marginTop: '3rem',
    fontFamily: 'Raleway',
    fontWeight: 600,
  },
  rootFlex: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexFlow: 'row wrap',
      alignItems: 'baseline',
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      paddingTop: 1,
      paddingBottom: 1,
    }
  },
  flexChildren: {
    flexGrow: 1,
  },
  logo: {
    width: 40,
    verticalAlign: 'middle',
    marginRight: 8,
  },
})

const Footer = (props) => (
  <footer className={props.classes.root}>
    <div className={'wrapper ' + props.classes.rootFlex}>
      <p className={props.classes.flexChildren}>
        <a href="https://hourtech.ca">
          <img src={logo} alt="HourTech Logo" className={props.classes.logo} />
        </a>
        HourTech
      </p>
      <p className={props.classes.flexChildren} style={{marginTop: 30, marginBottom: 30}}>Team Hawk &copy;2019</p>
      <SocialMenu />
    </div>
  </footer>
)

export default withStyles(styles)(Footer)
