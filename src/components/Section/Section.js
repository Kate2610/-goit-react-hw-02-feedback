
import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
	return (
		<>
			<h2>{title}</h2>
			{children}
		</>
	);
};

Section.propTypes = {
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
	title: PropTypes.string.isRequired
};
export default Section;