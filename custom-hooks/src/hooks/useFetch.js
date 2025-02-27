import { useEffect, useState } from "react";
import { fetchUserPlaces } from "../http";

export function useFetch(fetchFu, initialValue) {
	const [isFetching, setIsFetching] = useState();
	const [error, setError] = useState();
	const [fetchedData, setFetchedData] = useState(initialValue);

	useEffect(() => {
		async function fetchData() {
			setIsFetching(true);
			try {
				const data = await fetchFu();
				setFetchedData(data);
			} catch (error) {
				setError({ message: error.message || "Failed to fetch data" });
			}

			setIsFetching(false);
		}

		fetchData();
	}, [fetchFu]);

	return {
		isFetching,
		error,
		fetchedData,
	};
}
