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
import Display from './Display';
import API1 from './API1';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    console.log('Feed props are', props);
  }

  render() {
    let username = this.props.location.state.referrer.username;
    // let interests = this.props.location.state.referrer.interests;
    let interests = [1];
    let apiData = this.props.location.state.referrer.apiData;
    let displayArr = []; 
    for (let i = 0; i < interests.length; i++) { 
      if (interests[i] === 0) displayArr.push(<Display info={apiData[i]}/>);
      else if (interests[i] === 1) displayArr.push(<API1 info={apiData[i]}/>);
      else if (interests[i] === 2) displayArr.push(<Display info={apiData[i]}/>);
    }
    // console.log(displayArr);
    return (
      <div>
        {displayArr}
      </div>
    )
  }
}

export default Feed;