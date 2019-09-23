import React from 'react';
import { useSignUpForm } from './CustomHooks';
import { Link } from 'react-router-dom';
import './Contact.scss';
import oliver from '../oliver.jpg';


const Contact = () => {
    const onContact = () => {
        console.log(`Message sent!
            Name: ${inputs.firstName} ${inputs.lastName}
            Email: ${inputs.email}
            Subject: ${inputs.subject}
            Message: ${inputs.message
            }`
        );
    };

    const { inputs, handleInputChange, handleSubmit } =
    useSignUpForm(onContact);

        
        return (

            <div className="contactContainer">
                <div className="contactBack">
                    <Link className="contactHome" to="/"><i className="fas fa-times-circle"></i></Link>
                    <div className ="contactForm">
                        <div className="contactHeader">
                            <img src= { oliver } alt="face of owner" />
                        </div>
                        <div className="contactBody">
                            <form onSubmit={handleSubmit}>
                                <div className="nameForm">
                                        <div>
                                            <input 
                                            name="firstName"
                                            type="text" 
                                            onChange={handleInputChange}
                                            value={inputs.firstName || ""}
                                            placeholder="Your first name"
                                            required
                                            />
                                        </div>
                                        <div>
                                            <input 
                                            name="lastName"
                                            type="text" 
                                            onChange={handleInputChange}
                                            value={inputs.lastName || ""}
                                            placeholder="Your last name"
                                            required
                                            />
                                        </div>
                                        </div>
                                    <div className="emailSubjectForm">
                                        <div>
                                            <input
                                            name="email"
                                            type="email"
                                            onChange={handleInputChange}
                                            value={inputs.email || ""}
                                            placeholder="Your email adress"
                                            required
                                            />
                                        </div>
                                        <div>
                                            <input
                                            name="subject"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.subject || ""}
                                            placeholder="Subject"
                                            required
                                            />
                                        </div>
                                    </div>
                                <textarea
                                    name="message"
                                    type="text"
                                    onChange={handleInputChange}
                                    value={inputs.message || ""}
                                    placeholder="Message"
                                    />
                                <button className="btn-submit" type="submit">
                                    Send message
                                    </button>
                            </form>
                        </div>
                    </div>  
                </div>          
            </div>
        )
    
}

export default Contact;