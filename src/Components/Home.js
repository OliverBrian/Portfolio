import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
// import { Link } from 'react-router-dom';
import oliverbrian from '../oliverbrian.jpg';
// import ContactModal from './ContactModal';

class Home extends Component {
    render () {
        return (
            <div className="content">
                <div className="aboutContent">
                    <section className="profile">
                        <img src= { oliverbrian } alt="image of the owner of this website"/>
                        <div className="profileContent">
                                <h1>Web Developer {"\n"}In The Making</h1>
                                <p>I'm a front-end developer student based in Stockholm, Sweden. {"\n"}
                                I'm passionate about design, have a creative mind and curiosity is my biggest strength.</p>
                                <Link
                                className="action-btn" to="/Contact">Work with me!</Link>
                    
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default Home;