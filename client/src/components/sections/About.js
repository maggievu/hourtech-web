import React from 'react'
import Member from './Member'
import { withStyles } from '@material-ui/core/styles'

import bg from '../../assets/img/about-bg2.jpg'
import team from '../../assets/img/team.jpeg'
import maggie from '../../assets/img/maggie.jpg'
import ta from '../../assets/img/ta.jpg'
import diego from '../../assets/img/diego.jpg'
import julia from '../../assets/img/julia.jpg'
import andra from '../../assets/img/andra.jpg'

const styles = theme => ({
	root: {
		position: 'relative',
	},
	rootFlex: {
		display: 'flex',
		flexFlow: 'row wrap',
		justifyContent: 'center',
		marginTop: '1rem',
	},
	backgroundColor: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		opacity: 0.25,
		zIndex: -1,
		backgroundColor: theme.palette.primary.light,
	},
	backgroundImage: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		opacity: 0.25,
		zIndex: -2,
		backgroundImage: `url(${bg})`,
		backgroundSize: 'cover',
	},
	image: {
		width: 870,
		borderRadius: 10,
	}
})

const About = (props) => (
    <div className={props.classes.root}>
        <div className={props.classes.backgroundColor}></div>
        <div className={props.classes.backgroundImage}></div>
        <section className="wrapper center marginTop">

            <h2 id='about'>About Us</h2>
            <p>
                <img src={team} alt="HourTech Team" className={props.classes.image} />
            </p>

            <div className={"team-members-container " + props.classes.rootFlex}>

                <Member
                    className={props.classes.flexChildren}
                    memberName="Maggie (MK) Vu"
                    memberImg={maggie}
                    memberRole="Project Manager / Lead Web"
                    memberDesc="Maggie has a French master’s degree in Information and Communications Technology. Her experience working in different industries and cultures allows her to empower her team members and leverage the collective strengths. She will ensure that the project is complete on time within scope."
                    memberLinkedin="http://linkedin.com/in/maggievu"
                    memberGithub="https://github.com/maggievu"
                />

								<Member
										className={props.classes.flexChildren}
										memberName="Diego Rodrigues"
										memberImg={diego}
										memberRole="Lead Android / Frontend"
										memberDesc="Diego has a Bachelor of Graphic Design and over 5 years of professional experience in e-commerce and responsive web design. He is excited about taking on new roles and new challenges for this project, as he will be in charge of building the native Android app using Android Studio and Java 8."
										memberLinkedin="http://linkedin.com/in/diegoro"
										memberGithub="https://github.com/dit0"
								/>

                <Member
                    className={props.classes.flexChildren}
                    memberName="Noppawit Hansompob"
                    memberImg={ta}
                    memberRole="Lead iOS / Backend"
                    memberDesc="As a Computer Science graduate, Ta is an experienced Salesforce developer. He is very hardworking and passionate about what he does, and he’ll be in charge of building the native iOS app using XCode 10 and Swift 4.2."
                    memberLinkedin="http://linkedin.com/in/mmadhu1310"
                    memberGithub="https://github.com/meet-madhu1310"
                />

                <Member
                    className={props.classes.flexChildren}
                    memberName="Andra Iskandar"
                    memberImg={andra}
                    memberRole="Lead QA / Frontend"
                    memberDesc="With a bachelor’s degree in Information Systems, Andra has a solid background in QA testing and unit testing. So naturally, he’s the best man for the job. He’ll also be supporting the front end development."
                    memberLinkedin="http://linkedin.com/in/hkaur023"
                    memberGithub="https://github.com/harmanparihar/"
                />

                <Member
                    className={props.classes.flexChildren}
                    memberName="Yulia Stanovsky"
                    memberImg={julia}
                    memberRole="Lead UX UI Designer / Animator"
                    memberDesc="With a bachelor’s degree of fine arts and animation, Yulia enjoys creating beautiful and practical design solutions in her projects. She carries her sketch book and color pencils all the time so that she’s always ready to create great UX and UI design."
                    memberLinkedin="http://linkedin.com/in/yulia-stan"
                />

            </div>

        </section>
    </div>
)

export default (withStyles)(styles)(About)