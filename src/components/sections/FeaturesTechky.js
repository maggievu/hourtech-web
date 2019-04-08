import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import profile from '../../assets/img/profile.png'
import activity from '../../assets/img/activity.png'
import messageBoard from '../../assets/img/message-board.png'

const styles = {
  root: {
    textAlign: 'center',
    marginTop: '1rem',
  }
}

const FeaturesTechky = (props) => (
  <Grid container spacing={40} className={props.classes.root}>
    <Grid item xs={12} md={4}>
      <img width={200} src={profile} alt='Features for Techkies' />
      <h3>Pre-vetted</h3>
      <p>Send us your previous works to become certified</p>
    </Grid>
    <Grid item xs={12} md={4}>
      <img width={200} src={activity} alt='Features for Techkies' />
      <h3>History</h3>
      <p>Save favorite jobs. Review past and current jobs</p>
    </Grid>
    <Grid item xs={12} md={4}>
      <img width={200} src={messageBoard} alt='Features for Techkies' />
      <h3>Messaging</h3>
      <p>Private and secure chat with the client </p>
    </Grid>
  </Grid>
)

FeaturesTechky.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FeaturesTechky)

