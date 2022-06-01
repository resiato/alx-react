import React, { Component, Fragment } from "react";
/* Styles */
import './App.css';
/* Components */
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from "../utils/utils";
/* Prototypes */
import PropTypes from 'prop-types';

const listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
];

const listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
];

class App extends Component {
  constructor(props) { 
    super(props);
  }
  render () {
    const {isLoggedIn } = this.props;
    return (
     <Fragment>
        <div className="App">
	  <Notifications listNotifications={listNotifications} />
	  <Header />
          <div className="App-body">
          {!isLoggedIn ? <Login /> : <CourseList listCourses={listCourses} />}
          </div>
          <Footer />
        </div>
      </Fragment>
    );
  }
}
App.defaultProps = {
    isLoggedIn: false
};

App.propTypes = {
    isLoggedIn: PropTypes.bool
};

export default App;
