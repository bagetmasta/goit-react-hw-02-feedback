import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map(({ label }) => (
    <Button key={label} type="button" onClick={onLeaveFeedback()}>
      {label}
    </Button>
  ));

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
