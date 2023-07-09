import React from 'react';
import propTypes from 'prop-types';
import css from './Statistics.module.css';
// ? // Компонент статистики в який передаються дані, та функції для їх обробки ;
const Statistics = ({
  good = 0,
  neutral = 0,
  bad = 0,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => (
  <ul className={css.stat_list}>
    <li className={css.stat_list_item}>Good: {good}</li>
    <li className={css.stat_list_item}>Neutral: {neutral}</li>
    <li className={css.stat_list_item}>Bad: {bad}</li>
    <li className={css.stat_list_item}>
      Total: {countTotalFeedback(good, neutral, bad)}
    </li>
    <li className={css.stat_list_item}>
      Positive feedback:{' '}
      {countTotalFeedback(good, neutral, bad) > 0
        ? countPositiveFeedbackPercentage(good, neutral, bad)
        : 0}
      %
    </li>
  </ul>
);
Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  countTotalFeedback: propTypes.func.isRequired,
  countPositiveFeedbackPercentage: propTypes.func.isRequired,
};
export default Statistics;
