import React from "react";
import {withRouter} from "react-router-dom";
import {Button, Col, Jumbotron, Row} from "reactstrap";
import PropTypes from "prop-types";
import FlightDetails from "./FlightDetailsBox";


class SearchResults extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const flights = this.props.flightCollection.sort((a,b)=>{
			return parseFloat(a.price) - parseFloat(b.price);
		});
		return (
			!this.props.isLoading
				? <Row>
					{flights.map((item, idx) => {
						return (<Col key={idx} md={{size: 6}} lg={{size: 3}}>
							<FlightDetails isLowest={idx===0 && true} flight={item}/>
						</Col>)
					})}
					{(flights.length===0) && <Col xs={{size: 12}}><h4 className="text-white text-center">No result found</h4></Col>}
				</Row>
				: null
		)
	}

}
SearchResults.PropTypes = {
	flightCollection : PropTypes.array,
	isLoading: PropTypes.bool
};
export default SearchResults;