import React from "react";
import Select from "react-select";
import {Button, Col, Jumbotron, Row} from "reactstrap";
import "react-dates/initialize";
import {DateRangePicker} from "react-dates";

import FlightService from "../../../api/services/FlightService";

class FlightSearch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			startDate: null,
			endDate: null,
			focusedInput: null,
			origin: '',
			destination: '',
			searchable: true,
			noResult: false,
			destinationCollection: []
		};

	}

	componentDidMount() {
		this.getFlights();
	}

	onDestinationChange = (selectedOption) => {
		this.setState({destination: selectedOption});
	}

	isValid = () => {
		return this.isValidEndDate() && this.isValidStartDate() && this.isValidOrigin() && this.isValidDestination()
	}

	onOriginChange(selectedOption) {
		this.setState({origin: selectedOption});
	}

	getFlights() {
		FlightService.getCodes()
			.then((resp) => {
				this.setState({
					destinationCollection: resp.airports
				})
			})
	}

	isValidOrigin() {
		return this.state.origin !== null
	}

	isValidDestination() {
		return this.state.destination !== null
	}

	isValidStartDate() {
		return this.state.startDate !== null
	}

	isValidEndDate() {
		return this.state.endDate !== null
	}

	render() {
		const {origin, destination, startDate, endDate} = this.state;
		return (
			<Jumbotron>
				<Row>
					<Col xs={{size: 12}} md={{size: 6}} lg={{size: 4}} xl={{size: 3}} className='mb-2'>
						<Select
							value={origin}
							onChange={(selected) => this.onOriginChange(selected)}
							labelKey='name'
							options={this.state.destinationCollection}
							name='DUB'
							placeholder='Origin'
						/>
					</Col>
					<Col xs={{size: 12}} md={{size: 6}} lg={{size: 4}} xl={{size: 3}} className='mb-2'>
						<Select
							value={destination}
							onChange={(selected) => this.onDestinationChange(selected)}
							labelKey='name'
							options={this.state.destinationCollection}
							name='STN'
							placeholder='Destination'
						/>
					</Col>
					<Col xs={{size: 12}} md={{size: 12}} lg={{size: 4}} xl={{size: 3}} className='d-flex mb-2'>
						<DateRangePicker
							startDate={startDate}
							startDateId="startDate"
							endDate={endDate}
							endDateId="endDate"
							onDatesChange={({startDate, endDate}) => this.setState({
								startDate,
								endDate
							})}
							focusedInput={this.state.focusedInput}
							onFocusChange={focusedInput => this.setState({focusedInput})}
						/>
					</Col>
					<Col xs={{size: 12}} md={{size: 12}} lg={{size: 12}} xl={{size: 3}} className=''>
						<Button
							disabled={!this.isValid()}
							color="primary"
							block
							onClick={() => this.props.onSubmit({origin, destination, startDate, endDate})}
						>
							Search
						</Button>
					</Col>
				</Row>
			</Jumbotron>
		)
	}
}

export default FlightSearch