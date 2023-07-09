import React from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './Buttons/Buttons';
import Section from './Section/Section';
import Notification from './Notification/Notification';
// ? // Компонент класу зі своїм стейтом, в залежності від якого працюють інші компоненти, що знаходяться в середині нього ;
export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // ? // Універсальна функція, що при натисканні на кнопку оновлює стейт екземпляра класу ;
  onLeaveFeedback = event => {
    this.setState(prevState => {
      return { [event.target.name]: (prevState[event.target.name] += 1) };
    });
  };
  // ? // Підрахунок кількості відгуків ;
  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };
  // ? // Процентне відношення позитивних відгуків ;
  countPositiveFeedbackPercentage = (good, neutral, bad) => {
    return Math.round((good * 100) / (good + neutral + bad));
  };
  // ? // Рендер усіх компонентів ;
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className="App">
        <Section title="Please, leave your feedback!">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {good || neutral || bad ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              countTotalFeedback={this.countTotalFeedback}
              countPositiveFeedbackPercentage={
                this.countPositiveFeedbackPercentage
              }
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}
