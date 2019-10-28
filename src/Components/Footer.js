import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
    render () {
        return (
            <div className="footer">
                <div className="socialLinks">
                    <a href="mailto:oliver.brian.vasquez@hotmail.se" className="mail">
                        <i className="fa fa-envelope-square"/>
                    </a>
                    <a href="https://github.com/OliverBrian" target="blank" className="github">
                        <i className="fab fa-github-square"/>
                    </a>
                    <a href="https://www.facebook.com/oliver.b.vasquez" target="blank" className="facebook">
                        <i className="fab fa-facebook-square"/>
                    </a>
                    <a href="https://www.instagram.com/oliverbrian/" target="blank" className="instagram">
                        <i className="fab fa-instagram"/>
                    </a>
                </div>
            </div>
        )
    }
}

export default Footer;