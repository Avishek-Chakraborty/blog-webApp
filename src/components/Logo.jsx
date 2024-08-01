import PropTypes from "prop-types";

function Logo({ width = "100px" }) {
	return <div className="text-white" style={{ width }}>
		<img src="src\assets\favicon.ico"/>
	</div>;
}

Logo.propTypes = {
	width: PropTypes.string
}

export default Logo;
