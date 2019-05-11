import React from "react";
import {Col, Container, Row} from "reactstrap";
import Navigation from "./Navigation";
import ScrollToTop from "../common/ScrollToTop";

const DefaultLayout = (props) => {
	return (
		<ScrollToTop>
			<Container>
				<Row>
					<Navigation/>
				</Row>
				<Row>
					<Col>
						<main>
							{props.children}
						</main>
					</Col>
				</Row>
			</Container>
		</ScrollToTop>




	)
}

export default DefaultLayout
