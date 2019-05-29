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
    name: "Workbuster",
    desc: "Team project where we worked with an actual company, Workbuster. Techniques used: SQL, Vue, KOA and KNEX",
    URL: "https://github.com/Naicah/KYH_Workbuster"
}
]


function ListOfProjects(props) {
     
        return (
            <Fragment>
            <div className="cardsList">
                <div className="cardsImages">
                <h3>{props.name}</h3>
                    <img style={{ width: "100%"}} src={props.photo}/>
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
            <hr />
            </Fragment>
            
            
        );
    
}

class CardsContainer extends Component{
    render() {
        return(
            <div className="cards">
   
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