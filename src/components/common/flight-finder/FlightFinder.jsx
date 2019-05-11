import React from "react";
import SearchForm from "./SearchForm";
import SearchResult from "./SearchResults";
import PropTypes from 'prop-types';
import FlightService from "../../../api/services/FlightService";
import Loader from "../Loader";
import "./FlightFinder.scss";

class FlightFinder extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			flightCollection: [],
			noResult: true,
			isLoading: false
		}
	}

	onSubmit = (formData) => {
		const {origin, destination, startDate, endDate} = formData;
		this.setState({isLoading:true},(prevState)=>{
			FlightService.getFlights(origin.iataCode, destination.iataCode, startDate.format('YYYY-MM-DD'), endDate.format('YYYY-MM-DD'))
				.then((resp) => {
					this.setState({flightCollection: resp.flights,isLoading: false})
				})
				.catch((err)=>{
					console.error('Error retriving data',err);
					this.setState({isLoading: false})
				})
		})
	};

	render() {
		return <div className="flight-finder">
				<SearchForm onSubmit={this.onSubmit} />
				<SearchResult isLoading={this.state.isLoading} flightCollection={this.state.flightCollection}  />
				{this.state.isLoading && <div className="flight-finder__loader"><Loader/></div> }
			</div>
	}
}

export default FlightFinder;