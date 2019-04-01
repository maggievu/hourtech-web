import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Card, CardHeader, CardContent } from '@material-ui/core'

const styles = theme => ({
  root: {
    maxWidth: 500,
    margin: '2rem auto',
  },
  cardHeader: {
    borderBottom: '1px solid #eee',
    background: 'linear-gradient(to right, #154b9c, #13bcd4)',
  },
  cardTitle: {
    fontFamily: 'Raleway',
    fontSize: 25,
    fontWeight: 600,
    color: theme.palette.common.white,
    textAlign: 'center',
  },
	cardSubheader: {
		fontSize: 16,
		fontWeight: 600,
		color: theme.palette.common.white,
		textAlign: 'center',
	},
})

const PricingClient = (props) => (
  <Card className={props.classes.root}>
		<CardHeader title='Free' subheader='$0/month' classes={{ root: props.classes.cardHeader, title: props.classes.cardTitle, subheader: props.classes.cardSubheader}} />
    <CardContent>
      HourTech will remain free forever. When you have found your techkie, pay accordingly to their hourly rate. We also offer email support (up to 5 business days) if you have a question or a concern.
    </CardContent>
  </Card>
)

PricingClient.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PricingClient)

