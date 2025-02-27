import { useEffect, useState } from "react";
import { fetchUserPlaces } from "../http";

export function useFetch(fetchFu, initialValue) {
	const [isFetching, setIsFetching] = useState();
	const [error, setError] = useState();
	const [fetchedData, setFetchedData] = useState(initialValue);

	return {
		isFetching,
		fetchedData,
		setFetchedData,
		error,
	};
}
