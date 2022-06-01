import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import PropTypes from "prop-types";
import NotificationItemShape from './NotificationItemShape';

export default function Notifications({ displayDrawer, listNotifications }) {
  return (
    <>
      <div className="menuItem">
        <p>Your notifications</p>
      </div>
      {displayDrawer && (
        <div className="Notifications">
	  <button style={{
            color: '#3a3a3a',
            fontWeight: 'bold',
            background: 'none',
            border: 'none',
            fontSize: '15px',
            position: 'absolute',
            right: '1em',
            top: '4em',
            cursor: 'pointer',
            outline: 'none',
          }}
	  aria-label="Close" onClick={(e) => {console.log('Close button has been clicked');}}>
          <img src={closeIcon} alt="close icon"/>
        </button>
        <p>Here is the list of notifications</p>
        <ul style={{position: 'relative'}}>
           {listNotifications.length === 0 ? (<NotificationItem value="No new notification for now" type='no-new' />) : <></>}
          {listNotifications.map((notification) => (<NotificationItem key={ notification.id } type={ notification.type } value={ notification.value } html={ notification.html } />))}
        </ul>
    </div>
    )}
   </>
  );
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
};

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};
