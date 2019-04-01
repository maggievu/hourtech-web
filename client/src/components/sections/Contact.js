import React, { Component } from "react"
import { withStyles } from '@material-ui/core/styles'
// import axios from 'axios'
// import path from '../discussion-board/path'

const styles = (theme) => ({
    form: {

    },
    formControl: {
        display: 'block',
    },
    label: {
        width: 100,
        display: 'inline-block',
        textAlign: 'right',
        marginRight: 10,
    },
    container: {
        maxWidth: 500,
        marginLeft: 'auto',
        marginRight: 'auto',
    }
})

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: "",
            userEmail: "",
            userMessage: "",
            // sending: false,
            sent: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.renderForm = this.renderForm.bind(this)
        this.renderSuccess = this.renderSuccess.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.setState({
            sent: true
        })
    }

    // async handleSubmit(e) {
    //     e.preventDefault()
    //     this.setState({
    //         sending: true
    //     })

        // await axios.post(path + '/api/form', this.state)
    //         .then(res => {
    //             if (res.data.message === 'success') {
    //                 this.setState({
    //                     sending: false,
    //                     sent: true
    //                 })
    //             } else {
    //                 alert("Something's not right... Would you like to try again?")
    //             }

    //         })
    //         .catch(err => {
    //             console.log('ERROR on front-end ' + err)
    //         })
    // }

    renderForm() {
        return (
            <form className="contact-form wrapper" onSubmit={this.handleSubmit}>
                <h2 className='center' id='contact'>Contact Us</h2>
                <div className={this.props.classes.container}>
                    <label className={this.props.classes.formControl}>
                        <span className={this.props.classes.label}>Name: </span>
                        <input
                            type="text"
                            name="userName"
                            value={this.state.userName}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label className={this.props.classes.formControl}>
                        <span className={this.props.classes.label}>Email: </span>
                        <input
                            type="email"
                            name="userEmail"
                            value={this.state.userEmail}
                            onChange={this.handleChange}
                            required
                        />
                    </label>
                    <label className={this.props.classes.formControl}>
                        <span className={this.props.classes.label} style={{ verticalAlign: 'top', marginTop: '.5rem' }}>Message: </span>
                        <textarea
                            name="userMessage"
                            value={this.state.userMessage}
                            onChange={this.handleChange}
                            required
                        />
                    </label>
                    <button type="submit" className={this.props.classes.label}>
                        {/* {this.state.sending ? <span><span class="fas fa-spinner fa-spin"></span> Sending</span> : "Send message"} */}
                        Send
                    </button>
                </div>
            </form>
        )
    }

    renderSuccess() {
        return (
            <div className="contact-success wrapper">
                <h2 className='center'>Contact Us</h2>
                <div className={"contact-success-results " + this.props.classes.container}>
                    <p>Thank you for contacting us. We'll get back to you within 5 days. Or you can <a href="mailto:maggievu91@gmail.com?subject=Hello%20from%20HourTech%20user">email us directly</a>. </p>
                    <p><strong>Your message</strong></p>
                    <p>Name: {this.state.userName}</p>
                    <p>Email*: {this.state.userEmail}</p>
                    <p>Message*: {this.state.userMessage}</p>
                </div>
            </div>
        )
    }

    render() {
        return this.state.sent ? this.renderSuccess() : this.renderForm()
    }
}

export default (withStyles)(styles)(Contact)