import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class BodySection extends Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
  }
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="bodySection">
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    )
  }
}

BodySection.defaultProps = {
  title: '',
}