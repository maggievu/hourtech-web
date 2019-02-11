import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Tab, Tabs } from '@material-ui/core'
import PricingClient from './PricingClient';
import PricingTechky from './PricingTechky';

const styles = {
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
    value: 'client',
  }
  
  handleChange = (event, value) => {
    this.setState({ value })
  }
  
  render() {
    const { classes } = this.props
  
    return (
      <div className='wrapper marginY'>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label='For Clients' value='client' />
          <Tab label='For Techkies' value='techky' />
        </Tabs>
        
        { this.state.value === 'client' ? <PricingClient /> : <PricingTechky /> }
      </div>
    )
  }
}

Pricing.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Pricing)

