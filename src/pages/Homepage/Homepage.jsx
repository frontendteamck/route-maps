import React from "react";
import logo from "../../assets/images/logo.png";
import "./Homepage.scss";
import FlightFinder from "../../components/common/flight-finder/FlightFinder";

const Homepage = () => {
	return <div className="homepage">
		<h1 className="text-center homepage__claim"><img src={logo}/> Flight finder</h1>
		<FlightFinder/>
	</div>
};

export default Homepage
