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
                            <p> {"\n"}
                                
                                Nyfiken, motiverad och genuint intresserad av allt som har med programmering och utveckling att göra. 
                                Pluggar till mitt framtida drömjobb på KYH yrkeshögskola för tillfället, och har precis avslutat mitt första år.
                                Där har jag lärt mig en mängd med nya tekniker och utvecklat befintliga kompetenser inom Front End, 
                                då främst inom HTML/CSS, Javascript, Reactjs, SASS, Nodejs, Firebase men har även nosat på Vue, Knex, PHP m.m. 
                                Tanken är att jobba som Full Stack-utvecklare i framtiden. 
                                Har tidigare studerat Ekonomi på SU och jobbat några år inom väktarbranchen. 
                                Vill fördjupa mina kunskaper inom utveckling och hoppas kunna göra detta på nästa arbetsplats. Söker både deltid och heltid, men även praktikplats inför kommande HT-termin.
                            </p>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;