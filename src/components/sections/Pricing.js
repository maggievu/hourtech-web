import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'

const styles = {
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 500,
    margin: 'auto',
  },
  cardHeader: {
    borderBottom: '1px solid #eee',
  },
  rootGrid: {
    textAlign: 'center',
    marginTop: '2rem',
  }
}

class Pricing extends Component {
  state = {
    value: 0,
  }
  
  handleChange = (event, value) => {
    this.setState({ value })
  }
  
  render() {
    const { classes } = this.props
  
    return (
      <div classes={{root: classes.root}} className='wrapper'>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="For Clients" />
          <Tab label="For Techkies" />
        </Tabs>
        
        <Card className={classes.card}>
          <CardHeader title='Free' className={classes.cardHeader}/>
          <CardContent>
            blabla
          </CardContent>
        </Card>
      </div>
    )
  }
}

Pricing.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Pricing)

