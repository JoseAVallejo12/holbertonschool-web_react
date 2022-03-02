import React from 'react'
import PropTypes from 'prop-types'

function CourseListRow({ textFirstCell, textSecondCell, isHeader }) {


  const elementStyles = {
    backgroundColor: isHeader ? '#deb5b545' : '#f5f5f5ab',
  }
  const elementToRender = () => {
    let element;
    if (isHeader) {
      element = <tr style={elementStyles}><th colSpan={2}>{textFirstCell}</th></tr>;
      if (textSecondCell) {
        element = <tr style={elementStyles}><th>{textFirstCell}</th><th>{textSecondCell}</th></tr>;
      }
    } else {
      element = (
        <tr style={elementStyles}>
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
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
}

export default CourseListRow
