import React, { Component } from 'react';
import './Skills.scss';
import { Link } from 'react-router-dom';
import ProfileData from './ProfileData';
import Techniques from './Techniques';
class Skills extends Component {

    
    render() {

    
        return (
            <div className="skillsContainer">
                <div className="skillsBack">
                    <Link className="skillsHome" to="/"><i className="fas fa-times-circle"></i></Link>
                    <div className="skillsContent">
                        <div className="skillsHeader">
                                    <h1>Techniques and frameworks
                                    </h1>
                                  
                            </div>
                            <hr />
                            <div className="skillsBody">
                                        <Techniques/>
                                        <hr />
                                    
                                    <ProfileData />
                            </div>
                    </div>
                </div>
            </div>
        )
            
        
    }
}
export default Skills;