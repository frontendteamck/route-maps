import React from "react";
import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import moment from "moment";
import {Button, Card, CardText, CardTitle,CardSubtitle} from "reactstrap";
import "./FlightDetailsBox.scss";

const FlightDetailsBox =(props)=> {
		return (
			<div className="flight-details-box">
				<Card body color={props.isLowest ? 'primary flight-details-box--lowest-price' : ''} className="mb-3">
					<CardTitle>
						Price: {Number(props.flight.price).toFixed(2)} {props.flight.currency}
					</CardTitle>
					{props.isLowest && <CardSubtitle>Lowest price </CardSubtitle> }
					<CardText>
						Date from: {moment(props.flight.dateFrom).format('YYYY-MM-DD')} <br/>
						Date to: {moment(props.flight.dateTo).format('YYYY-MM-DD')}
					</CardText>
					<Button>Go somewhere</Button>
				</Card>
			</div>
		)
};

FlightDetailsBox.propTypes = {
	flight: PropTypes.shape({
		price: PropTypes.number,
		currency: PropTypes.string,
		dateFrom:PropTypes.string,
		dateTo: PropTypes.string
	}),
	isLowest: PropTypes.bool
};

export default withRouter(FlightDetailsBox)