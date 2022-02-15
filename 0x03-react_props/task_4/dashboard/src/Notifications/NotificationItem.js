import React from 'react'

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
