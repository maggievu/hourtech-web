import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    flexChildren: {
        flexBasis: 380,
        margin: 10,
        flexGrow: 1,
        flexShrink: 1,
    },
})

const Member = (props) => (
    <div className={props.classes.flexChildren}>
        <img src={props.memberImg} alt={props.memberName + "'s photo"} />
        <h3>{props.memberName}</h3>
        <p>{props.memberRole}</p>
        <p>{props.memberDesc}</p>
        <p className="connect-me">
            <a href={props.memberLinkedin} target="_blank" rel="noopener noreferrer"><span className="fab fa-linkedin"></span></a>
            {props.memberGithub ? <a href={props.memberGithub} target="_blank" rel="noopener noreferrer"><span className="fab fa-github"></span></a> : null}
        </p>
    </div>
)

export default (withStyles)(styles)(Member)