import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import phone from '../../assets/img/phone-screen.png'

const styles = {
  root: {
    textAlign: 'center',
    marginTop: '1rem',
  }
}

const FeaturesClients = (props) => (
  <Grid container spacing={40} className={props.classes.root}>
    <Grid item xs={12} md={4}>
      <img style={{width: 200}} src={phone} alt='Features for Clients' />
      <h4>Feature 1</h4>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diamnonummy nibh euismod tincidunt ut laoreet dolore</p>
    </Grid>
    <Grid item xs={12} md={4}>
      <img style={{width: 200}} src={phone} alt='Features for Clients' />
      <h4>Feature 2</h4>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diamnonummy nibh euismod tincidunt ut laoreet dolore</p>
    </Grid>
    <Grid item xs={12} md={4}>
      <img style={{width: 200}} src={phone} alt='Features for Clients' />
      <h4>Feature 3</h4>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diamnonummy nibh euismod tincidunt ut laoreet dolore</p>
    </Grid>
  </Grid>
)

FeaturesClients.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FeaturesClients)

