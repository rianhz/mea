import React from "react";
import bg from "../images/bg.jpg";
import "../css/nav.css";

const NavigationBar = ({ user }) => {
	return (
		<nav>
			<img src={bg} alt="logo" id="logo" />
			<div className="info">
				<img src={bg} alt="user" />
				<p>Hallo, {user.name}</p>
			</div>
		</nav>
	);
};

export default NavigationBar;
