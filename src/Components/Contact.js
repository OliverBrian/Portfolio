import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Contact.scss';
import oliver from '../oliver.jpg';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

    render () {
        return (
            <div className="contactContainer">
                <div className="contactBack">
                    <Link className="contactHome" to="/"><i className="fas fa-times-circle"></i></Link>
                    <div className ="contactForm">
                        <div className="contactHeader">
                            <img src= { oliver } alt="face of owner" />
                        </div>
                        <div className="contactBody">
                            <form onSubmit={this.handleSubmit}>
                                <div className="nameForm">
                                        <div>
                                            <input 
                                            name="firstName"
                                            type="text" 
                                            value={this.state.value} 
                                            onChange={this.handleChange}
                                            placeholder="Your first name"
                                            />
                                        </div>
                                        <div>
                                            <input 
                                            type="lastName" 
                                            // value={this.state.value} 
                                            onChange={this.handleChange}
                                            placeholder="Your last name"
                                            />
                                        </div>
                                        </div>
                                <div className="emailSubjectForm">
                                    <   div>
                                            <input
                                            name="email"
                                            type="text"
                                            // value={this.state.value}
                                            onChange={this.handleChange}
                                            placeholder="Your email adress"
                                            />
                                        </div>
                                        <div>
                                            <input
                                            name="subject"
                                            type="text"
                                            // value={this.state.value}
                                            onChange={this.handleChange}
                                            placeholder="Subject"
                                            />
                                        </div>
                                    </div>
                                <textarea
                                    name="message"
                                    type="text"
                                    // value={this.state.value}
                                    onChange={this.handleChange}
                                    placeholder="Message"
                                    />
                                <div className="btn-submit" type="submit" onClick={this.handleSubmit}>
                                    Send message
                                    </div>
                            </form>
                        </div>
                    </div>  
                </div>          
            </div>
        )
    }
}

export default Contact;