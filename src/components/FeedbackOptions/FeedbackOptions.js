import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
	return (
    <>
    {options.map((option) => (
    <button key={option.id} type="button" name={option.name} onClick={onLeaveFeedback}>
    {option.name}
  </button>
))}
				</button>
			))}
		</>
	);
};
FeedbackOptions.propTypes = {
	options: PropTypes.arrayOf(PropTypes.string).isRequired,
	onLeaveFeedback: PropTypes.func.isRequired
};
export default FeedbackOptions;
