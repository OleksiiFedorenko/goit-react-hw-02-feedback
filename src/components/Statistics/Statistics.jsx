import PropTypes from 'prop-types';
import { Stats, StatEl } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Stats>
      <StatEl>Good: {good}</StatEl>
      <StatEl>Neutral: {neutral}</StatEl>
      <StatEl>Bad: {bad}</StatEl>
      <StatEl>Total: {total}</StatEl>
      <StatEl>Positive feedback: {positivePercentage}</StatEl>
    </Stats>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
