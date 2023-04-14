import PropTypes from 'prop-types';
import { Options, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Options>
      {Object.keys(options).map(el => (
        <li key={el}>
          <Button
            className={el}
            type="button"
            onClick={() => onLeaveFeedback(el)}
          >
            {el}
          </Button>
        </li>
      ))}
    </Options>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
