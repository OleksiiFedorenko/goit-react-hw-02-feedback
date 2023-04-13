import { Component } from 'react';
import { Container } from './App.styled';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = el => {
    console.log(el);
    this.setState(prevState => ({ [el]: prevState[el] + 1 }));
    console.log(this.state);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} />
        </Section>
      </Container>
    );
  }
}

export default App;
