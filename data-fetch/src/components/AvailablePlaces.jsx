import { useEffect, useState } from "react";

import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../https.js";

export default function AvailablePlaces({ onSelectPlace }) {
	const [places, setPlaces] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		async function fetchPlaces() {
			try {
				const data = await fetchAvailablePlaces();
				navigator.geolocation.getCurrentPosition((position) => {
					console.log(position.coords.latitude, position.coords.longitude);

					const sortedPlaces = sortPlacesByDistance(
						data.places,
						position.coords.latitude,
						position.coords.longitude
					);
					setPlaces(sortedPlaces);
				});
			} catch (error) {
				console.error(error);
				setError({ message: error.message });
			}

			setIsLoading(false);
		}

		fetchPlaces();
	}, []);
	if (error) {
		return <Error title="An error ocurred!" message={error.message} />;
	}
	return (
		<Places
			title="Available Places"
			places={places}
			fallbackText="No places available."
			loadingText="Loading..."
			isLoading={isLoading}
			onSelectPlace={onSelectPlace}
		/>
	);
}
