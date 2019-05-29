import React, { Component } from 'react';
import './Techniques.scss';
import basic from '../Assets/basic.png';
import react from '../Assets/react.png';
import vue from '../Assets/vue.png';
import firebase from '../Assets/firebase.png';
import node from '../Assets/node.png';
import sass from '../Assets/sass.png';

const techniques = [{
    photo: basic,
    text:"HTML 5, CSS 3 and JavaScript"
},
{
    photo: react,
    text:"React"
},
{
    photo: vue,
    text:"Vue"
},
{
    photo: firebase,
    text:"Firebase"
},
{
    photo: node,
    text:"Node"
},
{
    photo: sass,
    text:"Sass"
},
// {
//     photo: bgabout,
//     text:"second project"
// },
]


function ListOfProjects(props) {
     
        return (
            <div className="showList">
                <div className="techniquesImages">
                    <img  src={props.photo} alt="skills/techhniques"/>
                    <p>{props.text}</p>
                </div>
            </div>
        );
    
}

class Techniques extends Component{
    render() {
        return(
            <div className="techniques">
   
                    {techniques.map(e =>
                    <ListOfProjects
                        photo={e.photo}
                        text={e.text}
                 
                    />
                    )}

            </div>
        );
    }

}

// function formatDate(date) {
//     return date.toLocaleDateString();
//   }
  
//   function Avatar(props) {
//     return (
//       <img
//         className="Avatar"
//         src={props.user.avatarUrl}
//         alt={props.user.name}
//       />
//     );
//   }
  
//   function UserInfo(props) {
//     return (
//       <div className="UserInfo">
//         <Avatar user={props.user} />
//         <div className="UserInfo-name">{props.user.name}</div>
//       </div>
//     );
//   }
  
//   function Comment(props) {
//     return (
//       <div className="Comment">
//         <UserInfo user={props.author} />
//         <div className="Comment-text">{props.text}</div>
//         <div className="Comment-date">
//           {formatDate(props.date)}
//         </div>
//       </div>
//     );
//   }

//   function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
//       <div key={number.toString()}>
//         {number}
//       </div>
//     );
//     return (
//       <div>{listItems}</div>
//     );
//   }
  
//   const numbers = [1, 2, 3, 4, 5];
  
//   const comment = {
//     date: new Date(),
//     text: 'I hope you enjoy learning React!',
//     author: {
//       name: 'Hello Kitty',
//       avatarUrl: 'https://placekitten.com/g/64/64',
//     },
//   };
// class Techniques extends Component {

    
//         render() {
//             return(
//                 <Fragment>
//                 <Comment
//                 date={comment.date}
//                 text={comment.text}
//                 author={comment.author}
//                 />
//                 <NumberList
//                 numbers={numbers}/>
//                 </Fragment>
//             )
//         }

// }

export default Techniques;