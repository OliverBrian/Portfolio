import React, { Component, Fragment } from 'react';
import capricorn from '../Assets/capricorn.png';
import oliverportfolio from '../Assets/oliverportfolio.png';
import bookingapp from '../Assets/bookingapp.png';
import workbuster from '../Assets/workbuster.png';
import './CardsContainer.scss';

const projects = [{
    photo: oliverportfolio,
    name:"First portfolio",
    desc: "This portfolio was made entirely with vanilla JS, CSS and HTML",
    URL: "http://oliverbrian.se"
   
},
{
    photo: bookingapp,
    name:"Booking App",
    desc: "Booking app built with React.js as the main Front-End framework and Firebase as the serverside framework",
    URL: "https://github.com/OliverBrian/bookingapp" 

},
{
    photo: capricorn,
    name:"Capricorn",
    desc: "Team project made with Quill library and built with Vanilla JS",
    URL: "https://github.com/OliverBrian/bookingapp"
    
},
{
    photo: workbuster,
    name: "Retargeting App",
    desc: "Team project where we worked with an actual company. Techniques used: SQL, Vue, KOA and KNEX",
    URL: "https://github.com/Naicah/Retargeting_app"
}
]


function ListOfProjects(props) {
     
        return (
            <Fragment>
            {/* <div className="cardsList">
                <div className="cardsImages">
                <h3>{props.name}</h3>
                    <img style={{ width: "100%"}} src={props.photo} alt="shows preview of project"/>
                </div>
                <div className="cardsInfo">
                    <div className="description">
                    <p>{props.desc}</p>
                    </div>
                </div>
                <div className="projectsLinks">
                    <div className="linkContainer">
                <a href={props.URL}>
                    <p>GIT HUB</p>
                <i className="fab fa-github-square"/>
                </a>
                </div>
                </div>
            </div>
            <hr /> */}
                <div className="cardsList">
                    <div class="card">
                        <div class="cardInner">
                            <div class="cardFront">
                                <div className="hexagonIcon">
                                <h3>{props.name}</h3>
                                </div>
                            <img src={props.photo} alt="shows preview of project"/>
                                
                            </div>
                            <div class="cardBack">
                                
                                <p>{props.desc}</p>
                                <div className="github">
                                <a href={props.URL} target='blank'>
                                {/* <p>GIT HUB</p> */}
                                <i className="fab fa-github-square"/>
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </Fragment>
            
            
        );
    
}

class CardsContainer extends Component{
    render() {
        return(
            <div className="cardsListContainer">
   
                    {projects.map(props =>
                    <ListOfProjects
                        
                        {...props}
                        key={props.name}
                    />
                    )}

            </div>
        );
    }

}

export default CardsContainer