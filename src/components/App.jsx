import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './Buttons/Buttons';
import Section from './Section/Section';
import Notification from './Notification/Notification';
// ? // Компонент класу зі своїм стейтом, в залежності від якого працюють інші компоненти, що знаходяться в середині нього ;
export const App = props => {
  let [good, setGood] = useState(0);
  let [neutral, setNeutral] = useState(0);
  let [bad, setBad] = useState(0);

  // ? // Універсальна функція, що при натисканні на кнопку оновлює стейт екземпляра класу ;
  const onLeaveFeedback = event => {
    if (event.target.name === 'good') {
      setGood((good += 1));
    } else if (event.target.name === 'neutral') {
      setNeutral((neutral += 1));
    } else if (event.target.name === 'bad') {
      setBad((bad += 1));
    }
  };
  // ? // Підрахунок кількості відгуків ;
  const countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };
  // ? // Процентне відношення позитивних відгуків ;
  const countPositiveFeedbackPercentage = (good, neutral, bad) => {
    return Math.round((good * 100) / (good + neutral + bad));
  };
  // ? // Рендер усіх компонентів ;
  const optionsObject = { good, neutral, bad };
  return (
    <div className="App">
      <Section title="Please, leave feedback!">
        <FeedbackOptions
          options={Object.keys(optionsObject)}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {good || neutral || bad ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countTotalFeedback={countTotalFeedback}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </div>
  );
};
