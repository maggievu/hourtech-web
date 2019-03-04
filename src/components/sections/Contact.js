// Form.js use React local state management to render the notification of successfully sent message

import React, { Component } from "react"
import axios from 'axios'
// import path from '../discussion-board/path'

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

    //     await axios.post(this.state)
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
                <h2>Contact Us</h2>
                <label>
                    <span>Name: </span>
                    <input
                        type="text"
                        name="userName"
                        value={this.state.userName}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    <span>Email: </span>
                    <input
                        type="email"
                        name="userEmail"
                        value={this.state.userEmail}
                        onChange={this.handleChange}
                        required
                    />
                </label>
                <label>
                    <span style={{ verticalAlign: 'top', marginTop: '.5rem' }}>Message: </span>
                    <textarea
                        name="userMessage"
                        value={this.state.userMessage}
                        onChange={this.handleChange}
                        required
                    />
                </label>
                <button type="submit">
                    {/* {this.state.sending ? <span><span class="fas fa-spinner fa-spin"></span> Sending</span> : "Send message"} */}
                    Send
                </button>
            </form>
        )
    }

    renderSuccess() {
        return (
            <div className="contact-success wrapper">
                <h2>Contact Us</h2>
                <p>Thank you for contacting us. We'll get back to you within 5 days. Or you can <a href="mailto:maggievu91@gmail.com?subject=Hello%20from%20HourTech%20user">email us directly</a>. </p>
                <div className="contact-success-results">
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

export default Contact