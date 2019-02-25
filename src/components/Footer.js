import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    background: '#000',
    color: '#0bbcd4',
  },
  rootFlex: {
    display: 'flex',
    flexFlow: 'row wrap',
  },
  flexChildren: {
    flexGrow: 1,
  },
}

const Footer = (props) => (
  <footer className={props.classes.root}>
    <div className={'wrapper ' + props.classes.rootFlex}>
      <p className={props.classes.flexChildren}>HourTech</p>
      <p className={props.classes.flexChildren}>HourTech copyright 2019</p>
      <ul className={props.classes.flexChildren}>
        <li><a>FB</a></li>
        <li><a>LI</a></li>
        <li><a>TW</a></li>
      </ul>
    </div>
  </footer>
)

export default withStyles(styles)(Footer)
