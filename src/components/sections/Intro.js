import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Button } from '@material-ui/core'
import phone from '../../assets/img/hand-holding.png'
import bg from '../../assets/img/intro-bg.jpeg'
import ios from '../../assets/img/ios.png'
import android from '../../assets/img/android.png'

const styles = theme => ({
  root: {
    position: 'relative',
  },
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
		opacity: 0.25,
		zIndex: -1,
    background: `url(${bg})`,
    backgroundSize: 'cover',
  },
  rootGrid: {
    flexGrow: 1,
    width: '100%',
    // height: 600,
    marginTop: 0,
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },
  link: {
    maxHeight: 40,
  },
  imgContainer: {
		textAlign: 'right',
		alignSelf: 'flex-end',
		paddingRight: '0 !important',
		paddingBottom: '0 !important',
  },
  img: {
		display: 'block',
		width: 450,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
})

const Intro = (props) => (
  <div className={props.classes.root}>
    <div className={props.classes.background}></div>
    <div className='wrapper'>
      <Grid container spacing={24} className={props.classes.rootGrid}>
        <Grid item xs={12} sm={7}>
          <div style={{ marginLeft: 24 }}>
          <h2>HourTech</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dolor felis, dignissim quis nisl porta, euismod tincidunt massa. In finibus vehicula lectus, eu faucibus felis euismod id. Sed quis orci eget libero placerat suscipit eu at lectus. Duis tincidunt auctor elit, quis cursus sapien fringilla vel. Vestibulum et mauris ut augue porta pretium. Cras auctor tellus in tellus venenatis, vel porttitor erat fringilla. Fusce quis placerat nunc.</p>
          <div>
            <a href="#"><img className={props.classes.link} src={ios} alt="Download for iOS" /></a>
            <a href="#"><img className={props.classes.link} src={android} alt="Download for Android" /></a>
          </div>
        </div>
        </Grid>
				<Grid item xs={12} sm={5} className={props.classes.imgContainer}>
          <img src={phone} alt='A hand holding a phone featured HourTech app' width={200} className={props.classes.img} />
        </Grid>
      </Grid>
    </div>
  </div>
)

export default (withStyles)(styles)(Intro)
