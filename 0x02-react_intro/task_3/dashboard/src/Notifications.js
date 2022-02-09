import React from 'react';
import './Notifications.css';
import closeIcon from './icons8-close-24.png';
import { getLatestNotification } from './utils';

export default function Notifications() {
  const handleClose = () => {
    console.log('Close button has been clicked')
  }
  return (
    <div className='notifications'>
      <button aria-label='Close' onClick={handleClose} style={{
        position: 'absolute',
        right: 15,
        top: 15,
        background: 'transparent',
        border: 'none',
      }}>
        <img src={closeIcon} alt="close icon" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="normal">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
}
