import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';

export default function Notifications() {
  return (
    <div className="Notifications">
      <button style={{
          color: '#3a3a3a',
          fontWeight: 'bold',
          background: 'none',
          border: 'none',
          fontSize: '15px',
          position: 'absolute',
          right: '1em',
          top: '1em',
          cursor: 'pointer',
          outline: 'none',
        }}
	aria-label="Close" onClick={(e) => {console.log('Close button has been clicked');}}>
         <img src={closeIcon} alt="close icon"/>
      </button>
      <p>Here is the list of notifications</p>
      <ul style={{position: 'relativei'}}>
        <NotificationItem type="default" value="New course available" />        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={{ __html: getLatestNotification() }}/>
      </ul>
    </div>
  );
}
