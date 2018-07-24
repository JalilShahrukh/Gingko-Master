/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
<<<<<<< HEAD
import Display from './Display';
import API1 from './API1';
=======
// import Display from './Display';
import ApiZeroDisplay from './api0Display';
import ApiOneDisplay from './API1';
import ApiTwoDisplay from './API-Display';
>>>>>>> f753c4e01d736de9cb6f384edac267deb22610f8

class Feed extends React.Component {
  constructor(props) {
    super(props);
    console.log('Feed props are', props);
  }

  render() {
    let username = this.props.location.state.referrer.username;

    let interests = this.props.location.state.referrer.interests;
    // let interests = [0];
    let apiData = this.props.location.state.referrer.apiData;
    let displayArr = []; 
    for (let i = 0; i < interests.length; i++) { 
      console.log('displaying api comp for',interests[i], apiData[i])
      if (interests[i] === 0) displayArr.push(<ApiZeroDisplay info={apiData[i]}/>);
      else if (interests[i] === 1) displayArr.push(<ApiOneDisplay info={apiData[i]}/>);
      else if (interests[i] === 2) displayArr.push(<ApiTwoDisplay info={apiData[i]}/>);
    }
    
    console.log(displayArr.length);
    return (
      <div>
        <h1>{'Feed Page for ' + username}</h1>
        {displayArr}
      </div>
    )
  }
}

export default Feed;