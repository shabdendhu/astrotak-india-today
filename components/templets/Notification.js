import { notification } from 'antd';
import React from 'react'

const Notification = () => {
    const OpenNotification = () => {
        notification.open({
          message: 'Notification Title',
          description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
          className: 'custom-class',
          style: {
            width: 600,
          },
        });
      };
  return OpenNotification
}

export default Notification