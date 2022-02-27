import React from 'react'
import PropTypes from 'prop-types';

export default function NotificationItem({ type, html, value, markAsRead }) {

  const renderList = () => {
    if (html) {
      return <li onClick={markAsRead} data-priority={type} dangerouslySetInnerHTML={html}></li>
    } else {
      return <li onClick={markAsRead} data-priority={type}>{value}</li>
    }
  }

  return renderList();
}

NotificationItem.prototype = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  markAsRead: PropTypes.func,
}
NotificationItem.defaultProps = {
  type: 'default',
};
