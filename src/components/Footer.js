import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import SocialMenu from './elements/SocialMenu'

const styles = theme => ({
  root: {
    background: '#000',
    color: theme.palette.primary.main,
  },
  rootFlex: {
    display: 'flex',
    flexFlow: 'row wrap',
  },
  flexChildren: {
    flexGrow: 1,
  },
})

const Footer = (props) => (
  <footer className={props.classes.root}>
    <div className={'wrapper ' + props.classes.rootFlex}>
      <p className={props.classes.flexChildren}>HourTech</p>
      <p className={props.classes.flexChildren}>HourTech copyright 2019</p>
      <SocialMenu className={props.classes.flexChildren} />
    </div>
  </footer>
)

export default withStyles(styles)(Footer)
