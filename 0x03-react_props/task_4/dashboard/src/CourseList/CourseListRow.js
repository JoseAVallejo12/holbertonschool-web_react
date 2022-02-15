import React from 'react'
import PropTypes from 'prop-types'

function CourseListRow(props) {
  return (
    <div>CourseListRow</div>
  )
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string.isRequired,
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
}

export default CourseListRow
