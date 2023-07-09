import React from 'react';
import propTypes from 'prop-types';
import css from './Buttons.module.css';
// ? // Компонент кнопок що приймає масив з опціями для рендеру, та функцію для обробки кліків ;
const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={css.options_list}>
    {options.map((option, index) => (
      <li className={css.options_list_item} key={index}>
        <button
          className={css.options_list_button}
          onClick={onLeaveFeedback}
          name={option}
        >
          {option.replace(option[0], option[0].toUpperCase())}
        </button>
      </li>
    ))}
  </ul>
);
FeedbackOptions.propTypes = {
  options: propTypes.array.isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};
export default FeedbackOptions;

// todo // Тут є функція що робить першу букву стрінги великою :
// * // string.replace(string[0], string[0].toUpperCase()) ;
