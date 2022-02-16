import React from 'react'
import PropTypes from 'prop-types';

export default function NotificationItem({ type, html, value }) {

  const renderList = () => {
    if (html) {
      return <li data-priority={type} dangerouslySetInnerHTML={html}></li>
    } else {
      return <li data-priority={type}>{value}</li>
    }
  }

  return renderList();
}

NotificationItem.prototype = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
  key: PropTypes.string.isRequired,
}
NotificationItem.defaultProps = {
  type: 'default',
};
