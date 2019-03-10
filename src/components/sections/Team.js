import React, { Component } from 'react'
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
    image: {
        width: 870,
        borderRadius: 10,
    }
})

const Team = (props) => (
    <div className={props.classes.root}>
        <div className={props.classes.background}></div>
        <section className="wrapper center">

            <h2>About Us</h2>
            <p>
                <img src={team} alt="HourTech Team" className={props.classes.image} />
            </p>

            <div className={"team-members-container " + props.classes.rootFlex}>

                <Member
                    className={"" + props.classes.flexChildren}
                    memberName="Mai Khanh Vu"
                    memberImg={maggie}
                    memberRole="Project Manager / Lead Web"
                    memberDesc="Having a Master degree in Information and Communications Technology, Maggie has a solid background in the ICT economy and regulation. Her experience working in different industries and cultures allows her to empower her team members and leverage the collective strengths. She will ensure that the project is complete on time within scope."
                    memberLinkedin="http://linkedin.com/in/maggievu"
                    memberGithub="https://github.com/maggievu"
                />

                <Member
                    className={"" + props.classes.flexChildren}
                    memberName="Noppawit Hansompob"
                    memberImg={ta}
                    memberRole="Lead iOS / Backend support"
                    memberDesc="As a Computer Engineering graduate, Meet is an experienced JAVA developer and junior web developer. He is very hardworking and passionate about what he does, that’s why he’ll be in charge of ensuring functional and design specifications of the web app."
                    memberLinkedin="http://linkedin.com/in/mmadhu1310"
                    memberGithub="https://github.com/meet-madhu1310"
                />

                <Member
                    className={"" + props.classes.flexChildren}
                    memberName="Diego Rodrigues"
                    memberImg={diego}
                    memberRole="Lead Android / UX UI support"
                    memberDesc="Diego has a Bachelor of Graphic Design and over 5 years of professional experience in e-commerce and responsive web design. He is excited about taking on new roles and new challenges for this project, as he will be in charge of the dataset and server, along with its structures and processing algorithms."
                    memberLinkedin="http://linkedin.com/in/diegoro"
                    memberGithub="https://github.com/dit0"
                />

                <Member
                    className={"" + props.classes.flexChildren}
                    memberName="Andra Iskandar"
                    memberImg={andra}
                    memberRole="Lead QA / Backend support"
                    memberDesc="Harman is a highly-motivated, results-driven and insightful Computer Science graduate. She likes to solve real-world problems using technology, such as building reliable applications and making it accessible to the large audiences."
                    memberLinkedin="http://linkedin.com/in/hkaur023"
                    memberGithub="https://github.com/harmanparihar/"
                />

                <Member
                    className={"" + props.classes.flexChildren}
                    memberName="Yulia Stanovsky"
                    memberImg={julia}
                    memberRole="Lead Designer / UX UI / Animator"
                    memberDesc="With a Bachelor degree of fine arts and animation, Yulia enjoys creating beautiful and practical design solutions in her projects. She carries her sketch book and color pencils all the time so that she’s always ready to create great UX and UI design along with the animation (via user interaction) of our web app."
                    memberLinkedin="http://linkedin.com/in/yulia-stan"
                />

            </div>

        </section>
    </div>
)

export default (withStyles)(styles)(Team)