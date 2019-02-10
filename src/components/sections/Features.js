import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import FeaturesClients from './FeaturesClients'

const styles = {
  root: {
    flexGrow: 1,
  },
}

class Features extends Component {
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

        <FeaturesClients />
        
      </div>
    )
  }
}

Features.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Features)

