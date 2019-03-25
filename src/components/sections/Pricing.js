import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Tab, Tabs } from '@material-ui/core'
import PricingClient from './PricingClient';
import PricingTechky from './PricingTechky';

const styles = theme => ({
	tabsRoot: {
		color: theme.palette.common.white,
	},
	tabsIndicator: {
		backgroundColor: 'initial',
	},
	tabRootLeft: {
		fontSize: 14,
		fontWeight: 600,
		background: theme.palette.primary.main,
		border: '2px solid #13bcd4',
		borderTopLeftRadius: 8,
		borderBottomLeftRadius: 8,
		minWidth: 250,
	},
	tabRootRight: {
		fontSize: 14,
		fontWeight: 600,
		background: theme.palette.primary.main,
		border: '2px solid #13bcd4',
		borderTopRightRadius: 8,
		borderBottomRightRadius: 8,
		minWidth: 250,
	},
	tabSelected: {
		backgroundColor: theme.palette.secondary.main
	},
  rootGrid: {
    textAlign: 'center',
    marginTop: '2rem',
  }
})

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
      <div className='wrapper'>
				<h2 className='center marginTop' id='pricing'>Pricing</h2>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
					classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
          centered
        >
          <Tab classes={{ root: classes.tabRootLeft, selected: classes.tabSelected }} label='For Clients' value='client' />
					<Tab classes={{ root: classes.tabRootRight, selected: classes.tabSelected }} label='For Techkies' value='techky' />
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

