import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import search from '../../assets/img/search.png'
import portfolio from '../../assets/img/portfolio.png'

const styles = {
  root: {
    textAlign: 'center',
    marginTop: '1rem',
  }
}

const FeaturesClients = (props) => (
  <Grid container spacing={40} className={props.classes.root}>
    <Grid item xs={12} md={4}>
      <img width={200} src={search} alt='Features for Clients' />
      <h3>Search</h3>
      <p>Find a certified techkie to help you out</p>
    </Grid>
    <Grid item xs={12} md={4}>
      <img width={200} src={portfolio} alt='Features for Clients' />
      <h3>Portfolios</h3>
      <p>Review their previous works and experience</p>
    </Grid>
    <Grid item xs={12} md={4}>
      <img width={200} src={portfolio} alt='Features for Clients' />
      <h3>Messaging</h3>
      <p>Instantly contact the best techkie for your need</p>
    </Grid>
  </Grid>
)

FeaturesClients.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FeaturesClients)

