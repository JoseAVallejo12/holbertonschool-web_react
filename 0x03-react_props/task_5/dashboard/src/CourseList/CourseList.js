import React from 'react'
import PropTypes from 'prop-types'
import CourseListRow from './CourseListRow'
import './CourseList.css'
import { CourseShape } from './CourseShape'

function CourseList({ listCourses }) {
  return (
    <table id='CourseList'>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader />
      </thead>
      <tbody>
        {listCourses.length === 0
          ? <CourseListRow textFirstCell="No courses available yet" />
          : listCourses.map(course => <CourseListRow
            key={course.id}
            textFirstCell={course.name}
            textSecondCell={course.credit} />)
        }

      </tbody>
    </table>
  )
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(
    PropTypes.shape(CourseShape)
  ),
};
CourseList.defaultProps = {
  listCourses: [],
}

export default CourseList
