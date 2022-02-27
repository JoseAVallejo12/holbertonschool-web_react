/* eslint-disable react/display-name */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function WithLogging(WrappedComponent) {
  return class extends Component {
    static propTypes = {
      displayName: PropTypes.string,
    }
    constructor(props) {
      super(props);
      this.displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    }
    componentDidMount() {
      console.log(`Component ${this.displayName} is mounting`);
    }

    componentWillUnmount() {
      console.log(`Component ${this.displayName} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
}
