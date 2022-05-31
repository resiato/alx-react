import React from "react";
import './App.css';
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList'

function App({isLoggedIn}) {
  return (
    <div className="App">
      <Notifications />
      <Header />
      <div className="App-body">
          {!isLoggedIn ? <Login /> : <CourseList />}
      </div>
      <Footer />
    </div>
  );
}

App.defaultProps = {
    isLoggedIn: false,
    textSecondCell: null,
};

App.propTypes = {
    isLoggedIn: PropTypes.bool,
};

export default App;
