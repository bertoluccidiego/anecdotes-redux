import { useSelector } from 'react-redux';

function Notification() {
  function selector(state) {
    return state.notifications;
  }
  const notification = useSelector(selector);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  };

  if (notification) {
    return <div style={style}>{notification}</div>;
  }

  return null;
}

export default Notification;
