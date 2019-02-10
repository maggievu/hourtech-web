import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  root: {
    height: '50vh',
    display: 'flex',
    flexFlow: 'row wrap',
    // background: '#6fbeff',
    // backgroundImage: 'url("computers.jpg") linear-gradient(135deg, #6fbeff 0%, #183a90 100%)',
    // backgroundImage: 'linear-gradient(135deg, #6fbeff 0%, #183a90 100%)',
  },
  first: {
    flexBasis: 300,
    background: 'linear-gradient(180deg, #4966B0 0%, #183a90 100%)',
  },
  second: {
    flexBasis: 300,
    background: 'linear-gradient(180deg, #6fbeff 0%, #183a90 90%)',
  },
})

const Intro = (props) => (
  <div className={props.classes.root}>
    <div className={props.classes.first}>
      First
    </div>
    <div className={props.classes.second}>
      Second
    </div>
    {/* HourTech Intro here */}
  </div>
)

export default (withStyles)(styles)(Intro)
