import React, { Component } from 'react';
import './ProfileData.scss';
import teamtreehouse from '../Assets/teamtreehouse.png';
// const API = 'https://jsonplaceholder.typicode.com/users';
const API = 'https://teamtreehouse.com/oliverbrianbarravasquez.json';


class ProfileData extends Component {

    state = {
        data: [],
    }

      componentDidMount() {
        fetch(API)
          .then(response => response.json())
          .then(data => {
              let { points: {JavaScript}} = data;
              let { points: {total}} = data;
            //   let { badges: {badges}} = data;
              this.setState({ 
                  data: data,
                  profile: JavaScript,
                  profilePoints: total,
                  
                //   badgesCount: badges
             })


          });
      }
      render() {
        
        return (
          <div className="treeHouseProgress">
              <img src= {teamtreehouse} alt="teamtreehouse logo"/>
              <h3>My progress on Treehouse looks like this so far:</h3>
                <p>Total: {this.state.profilePoints}</p>
                {/* <p>and {this.state.profiledata}</p> */}
                <p>JavaScript: {this.state.profile} </p>
           
          </div>
        );
      }
    }
      
    
    
    export default ProfileData;

    