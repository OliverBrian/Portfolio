import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';

class Sidebar extends Component {

    render () {

        return (
            
            
            <div className="sidebar">
                <div className="navigation">

                    <div className="linkContainer">
                        <NavLink activeClassName='active' to="/About">About</NavLink>
                        <NavLink activeClassName='active' to="/Skills">Skills</NavLink>
                        <NavLink activeClassName='active' to="/Projects">Projects</NavLink>
                        <NavLink activeClassName='active' to="/Contact">Contact</NavLink>
                    </div>

                </div>
            </div>
        )
    }
}

export default Sidebar;