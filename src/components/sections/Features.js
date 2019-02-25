import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Tab, Tabs } from '@material-ui/core'
import FeaturesClient from './FeaturesClient'
import FeaturesTechky from './FeaturesTechky'
// import white from '@material-ui/core/colors/white'

const styles = {
}

class Features extends Component {
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
        <h2 className='center'>Features</h2>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="secondary"
          centered
        >
          <Tab label='For Clients' value='client' />
          <Tab label='For Techkies' value='techky' />
        </Tabs>

        { this.state.value === 'client' ? <FeaturesClient /> : <FeaturesTechky /> }
        
      </div>
    )
  }
}

Features.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Features)

