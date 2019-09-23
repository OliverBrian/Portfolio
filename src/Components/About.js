import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './About.scss';

class About extends Component {
    render () {
        return (
            <div className="aboutContainer">
                <div className="aboutBack">
                  <Link className="aboutHome" to="/"><i className="fas fa-times-circle"></i></Link>
                    <div className="aboutContent">
                        <div className="aboutHeader">
                            <h1>I am Oliver Brian

                            </h1>
                        </div>
                            <div className="aboutBody">
                            
                                <p> 
                                and I'm a front-end developer student with an eye for design and UX that recently finished my first year at KYH and am now looking
                                for a place to do my internship or find a part-time job in order to practice aquired skills. <br/>
                                
                                At school, I've learned and obtained several techniques and developed existing skills such as
                                HTML/CSS, Javascript, Reactjs, SASS, Nodejs, Firebase, SQL<br/> but also a bit of Vuejs, Knex, PHP and more.
                                <br/>
                                I have a background in the security industry where I've worked for several years,
                                <br/>I have also studied finance administration at Stockholm University for 2.5 years.<br/>
                                I'm very passionate about what I do, and my passion in design combined with my eye for UX really shows in my work.
                                <br/>
                                My goal is to continue to learn and practice new techniques and to eventually grow to become a full-stack developer in the near future.
                                
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;