// import React from "react";
import PropTypes from "prop-types";
export default function Button({
	children,
	type = "button",
	bgColor = "bg-blue-600",
	textColor = "text-white",
	className = "",
	...props
}) {
	return (
		<button
			className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
			type={type}
			{...props}
		>
			{children}
		</button>
	);
}


Button.propTypes = {
	children: PropTypes.any,
	type: PropTypes.any,
	bgColor: PropTypes.any,
	textColor: PropTypes.any,
	className: PropTypes.any
};