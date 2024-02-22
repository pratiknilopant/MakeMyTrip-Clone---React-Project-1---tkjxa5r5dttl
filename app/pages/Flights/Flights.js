"use client"
import { useEffect, useState } from 'react';
import FlightCard from '../../Components/FlightCard/FlightCard';
import FlightInputBox from '../../Components/FlightInputBox/FlightInputBox';
import './Flights.scss';
import { FLIGHT_API_LINK, FLIGHT_API_LINK_TWO } from '../Config';
import axios from 'axios';
import Loading from '../Loading/Loading';
import NoContent from '../NoContent/NoContent';
import Header from '../../Components/Navbar/Header/Header';
// import Error from "../Error/Error";

const Flights = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const [flights, setFlights] = useState([]);
	const [filteredFlights, setFilteredFlight] = useState([]);

	const getFlightsData = async () => {
		setIsLoading(true);
		try {
			const { data } = await axios.get(FLIGHT_API_LINK);
			setFlights(data.data);
			setFilteredFlight(data.data);
			setIsLoading(false);
		} catch (err) {
			try {
				const { data } = await axios.get(FLIGHT_API_LINK_TWO);
				setFlights(data);
				setFilteredFlight(data);
				setIsLoading(false);
			} catch (err) {
				setError(err.message);
				setIsLoading(false);
			}
		}
	};

	useEffect(() => {
		getFlightsData();
	}, []);
	return (
		<section>
			<Header/>
		<section className="flights-wrapper">
			<div className="flights">
				<div className="container">
					<FlightInputBox
						flights={flights}
						setFilteredFlight={setFilteredFlight}
					/>
				</div>
			</div>
			<div className="available">Available Flights</div>
			<div className="flight-tickets">
				{error ? (
					<Error message={error} />
				) : isLoading ? (
					<Loading />
				) : filteredFlights.length === 0 ? (
					<NoContent data="Flights" />
				) : (
					filteredFlights.map((flight, idx) => (
						<FlightCard key={idx} flight={flight} />
					))
				)}
			</div>
		</section>
		</section>
	);
};

export default Flights;
