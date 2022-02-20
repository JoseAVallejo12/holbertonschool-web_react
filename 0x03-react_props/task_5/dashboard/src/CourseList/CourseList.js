import React from 'react'
import PropTypes from 'prop-types'
import CourseListRow from './CourseListRow'
import './CourseList.css'

function CourseList(props) {
  return (
    <table id='CourseList'>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader />
      </thead>
      <tbody>
        <CourseListRow textFirstCell="ES6" textSecondCell="60" />
        <CourseListRow textFirstCell="Webpack" textSecondCell="20" />
        <CourseListRow textFirstCell="React" textSecondCell="40" />
      </tbody>
    </table>
  )
}

CourseList.propTypes = {}
CourseList.defaultProps = {}

export default CourseList
