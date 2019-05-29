import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Assets/bgabout.jpg';
import './About.scss';

class About extends Component {
    render () {
        return (
            <div className="aboutContainer">
                <div className="aboutBack">
                  <Link className="aboutHome" to="/"><i className="fas fa-times-circle"></i></Link>
                    <div className="aboutContent">
                        <div className="aboutHeader">
                            <h1>Hi, I'm Oliver Brian

                            </h1>
                        </div>
                            <div className="aboutBody">
                            <p>I'm currently studying Front-End-Development at KYH {"\n"}
                                where I'm learning the foundatoions of programming
                            </p>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;