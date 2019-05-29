import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CardsContainer from './CardsContainer';
import './Projects.scss';

class Projects extends Component {
    render () {
        return (
            <div className="projectsContainer">
                <div className="projectsBack">
                    <Link className="projectsHome" to="/"><i className="fas fa-times-circle"></i></Link>
                    <div className="projectsContent">
                        <div className="projectsHeader">
                                <h1>Projects</h1>
                            </div>
                            <div className="projectsBody">
                            <CardsContainer />
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;