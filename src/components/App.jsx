import { Component } from 'react';
// import { Feedback } from './Feedback/Feedback';
import { Section } from './Section/Section';
import { Container } from './Container/Container';
import { FeedbackOptions } from './FeedbackOptions/FeedbcakOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  setButtonLabel = e => {
    const label = e.target.innerHTML;

    this.setState(prevState => ({
      [label]: prevState[label] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;

    const total = good + neutral + bad;

    if (total !== 0) {
      return Number.parseInt((good / total) * 100);
    }
    return 0;
  };

  render() {
    const options = [{ label: 'good' }, { label: 'neutral' }, { label: 'bad' }];
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <Container>
        {/*  */}
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={() => this.setButtonLabel}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={totalFeedback}
            positivePercentage={positiveFeedback}
          />
        </Section>
      </Container>
    );
  }
}
