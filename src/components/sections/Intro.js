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
		marginTop: 70,
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
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
	},
	content: {
		marginTop: 30, 
		marginBottom: 30,
		[theme.breakpoints.up('1250')]: {
			marginLeft: 30,
		},
	},
	contentText: {
		[theme.breakpoints.up('md')]: {
			paddingRight: 20,
		},
		[theme.breakpoints.down('md')]: {
			maxWidth: 620,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
  link: {
		maxHeight: 50,
		marginTop: 20,
		marginRight: 10,
  },
  imgContainer: {
		textAlign: 'right',
		alignSelf: 'flex-end',
		paddingRight: '0 !important',
		paddingBottom: '0 !important',
  },
  img: {
		display: 'block',
		maxWidth: 430,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
})

const Intro = (props) => (
  <div className={props.classes.root}>
    <div className={props.classes.background}></div>
    <div className='wrapper'>
      <Grid container spacing={24} className={props.classes.rootGrid}>
        <Grid item xs={12} md={7}>
					<div className={props.classes.content}>
          	<h2>HourTech</h2>
						<p className={props.classes.contentText}>HourTech is a platform to connect people who need help on specific tech-related tasks (being either a software, a framework such as PowerPoint, Photoshop; or a language such as HTML, JavaScript, etc.) and people who possess the right tech-related skills. We wish to make technology accessible to everyone.</p>
						<div>
							<a href="#"><img className={props.classes.link} src={ios} alt="Download for iOS" /></a>
							<a href="#"><img className={props.classes.link} src={android} alt="Download for Android" /></a>
						</div>
					</div>
        </Grid>

				<Grid item xs={12} md={5} className={props.classes.imgContainer}>
          <img src={phone} alt='A hand holding a phone featured HourTech app' className={props.classes.img} />
        </Grid>
      </Grid>
    </div>
  </div>
)

export default (withStyles)(styles)(Intro)
