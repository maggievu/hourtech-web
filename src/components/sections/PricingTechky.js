import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Card, CardHeader, CardContent } from '@material-ui/core'

const styles = {
  root: {
    maxWidth: 500,
    margin: 'auto',
  },
  cardHeader: {
    borderBottom: '1px solid #eee',
  },
}

const PricingTechky = (props) => (
  <Card className={props.classes.root}>
    <CardHeader title='Not free for Techkies' className={props.classes.cardHeader}/>
    <CardContent>
      blabla
    </CardContent>
  </Card>
)

PricingTechky.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PricingTechky)

