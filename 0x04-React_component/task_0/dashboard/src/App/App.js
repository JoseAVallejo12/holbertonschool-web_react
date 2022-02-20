import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notification';
import { getFooterCopy, getFullYear } from '../utils/utils'
import { getLatestNotification } from '../utils/utils';

import './App.css';

class App extends Component {
  static propTypes = {}
  listCourses = [{
    id: 1,
    name: 'ES6',
    credit: 60,
  }, {
    id: 2,
    name: 'Webpack',
    credit: 20,
  },
  {
    id: 3,
    name: 'React',
    credit: 40,
  },
  ];
  listNotifications = [{
    id: 1,
    type: 'default',
    value: 'New resume available',
  }, {
    id: 2,
    type: 'default',
    value: 'New resume available',
  },
  {
    id: 3,
    type: 'urgent',
    html: { __html: getLatestNotification() },
  },
  ];

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Notifications listNotifications={this.listNotifications} />
        <Header />
        {this.props.isLoggedIn ? <CourseList listCourses={this.listCourses} /> : <Login />}
        <Footer />
      </React.Fragment>
    )
  }
}

App.protoType = {
  isLoggedIn: PropTypes.bool,
}
App.defaultProps = {
  isLoggedIn: false,
}

export default App;