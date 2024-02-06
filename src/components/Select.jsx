import React, { useId } from "react";
import PropTypes from "prop-types";

const Select = React.forwardRef(function Select(
	{ options, label, className, ...props },
	ref
) {
	const id = useId();
	return (
		<div className="w-full">
			{label && <label htmlFor={id} className=""></label>}
			<select
				{...props}
				id={id}
				ref={ref}
				className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
			>
				{options.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
});

// This part is for prop validation -->
Select.propTypes = {
	options: PropTypes.any.isRequired,
	label: PropTypes.any,
	className: PropTypes.string,
};

export default Select;

// export default React.forwardRef(Select); // This when the function is declared normally
