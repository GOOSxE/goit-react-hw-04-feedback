import React from 'react';
import propTypes from 'prop-types';
import css from './Notification.module.css'
// ? // Компонент нотифікацій якщо відгуків ще немає ;
const Notification = ({ message = 'There is no feedback' }) => (
  <h4 className={css.notification}>{message}</h4>
);
Notification.propTypes = {
  message: propTypes.string.isRequired,
};
export default Notification;
