import { useEffect, useState } from 'react';

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([]);
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch(`${baseUrl}/notification/${userInfo._id}`);
        const data = await response.json();
        setNotifications(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNotifications();
  }, []);

  return (
    <div className='container mt-4'>
      <h1 className=' font-bold'>Notifications</h1>
      <div className='mt-4 flex flex-col gap-3'>
      {
        notifications? (
          notifications.map((notification) => (
            <div key={notification._id} className=' cursor-pointer'>
              <p>{notification.message}</p>
              <hr />
            </div>
          ))
        ) : (
          <p>No notifications</p>
        )
      }
      </div>
    </div>
  );
};

export default NotificationPage;