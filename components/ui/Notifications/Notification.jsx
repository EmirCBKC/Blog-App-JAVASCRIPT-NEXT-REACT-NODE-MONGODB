import ReactDOM from 'react-dom';
import Style from './notification.module.css';

function Notification(props) {
  const { title, message, status } = props;

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = Style.success;
  }

  if (status === 'error') {
    statusClasses = Style.error;
  }

  const cssClasses = `${Style.notification} ${statusClasses}`;

  return ReactDOM.createPortal((
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  ), document.getElementById("notifications"));
}

export default Notification;
