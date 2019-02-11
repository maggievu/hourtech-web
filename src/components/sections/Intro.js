import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import phone from '../../assets/img/phone-screen.png'

const styles = theme => ({
  rootGrid: {
    flexGrow: 1,
    width: '100%',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },
  itemImg: {
    textAlign: 'right',
  },
  img: {
    display: 'inline',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
})

const Intro = (props) => (
  <div className='wrapper marginY'>
    <Grid container spacing={24} className={props.classes.rootGrid}>
      <Grid item xs={12} sm={8}>
        <p style={{marginLeft: 24}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dolor felis, dignissim quis nisl porta, euismod tincidunt massa. In finibus vehicula lectus, eu faucibus felis euismod id. Sed quis orci eget libero placerat suscipit eu at lectus. Duis tincidunt auctor elit, quis cursus sapien fringilla vel. Vestibulum et mauris ut augue porta pretium. Cras auctor tellus in tellus venenatis, vel porttitor erat fringilla. Fusce quis placerat nunc.</p>
      </Grid>
      <Grid item xs={12} sm={4} className={props.classes.itemImg}>
        <img src={phone} alt='Main Screen example' width={200} className={props.classes.img} />
      </Grid>
    </Grid>
  </div>
)

export default (withStyles)(styles)(Intro)
