import React from 'react'
import PropTypes from 'prop-types'

function CourseListRow({ textFirstCell, textSecondCell, isHeader }) {

  const elementToRender = () => {
    let element;
    if (isHeader) {
      element = <tr><th colSpan={2}>{textFirstCell}</th></tr>;
      if (textSecondCell) {
        element = <tr><th>{textFirstCell}</th><th>{textSecondCell}</th></tr>;
      }
    } else {
      element = (
        <tr>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </tr>
      );
    }
    return element;
  }

  return elementToRender();
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
}

export default CourseListRow
