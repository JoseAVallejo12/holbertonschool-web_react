import React from 'react';
import PropTypes from 'prop-types'
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notification';
import { getFooterCopy, getFullYear } from '../utils/utils'
import './App.css'


export default function App({ isLoggedIn }) {

  return (
    <React.Fragment>
      <Notifications />
      <Header />
      {isLoggedIn ? <CourseList /> : <Login />}
      <Footer />
    </React.Fragment>
  )
}

App.prototype = {
  isLoggedIn: PropTypes.bool,
}
App.defaultProps = {
  isLoggedIn: false,
}