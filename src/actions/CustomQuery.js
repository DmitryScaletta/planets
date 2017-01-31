import {
	getGalaxies,
	getPlanetsWithLifeByGalaxy,
	getPlanetsWithMinRadiusAndMaxSatellitesCount,
	getPlanetWithMaxSatellitesAndMinSatellitesVolume,
	getGalaxyWithMaxSumOfCoreTemperatures,
} from '../api'

export const FETCH_CUSTOM_QUERY_REQUEST = 'FETCH_CUSTOM_QUERY_REQUEST'
export const FETCH_CUSTOM_QUERY_SUCCESS = 'FETCH_CUSTOM_QUERY_SUCCESS'
export const FETCH_CUSTOM_QUERY_FAILURE = 'FETCH_CUSTOM_QUERY_FAILURE'

export function fetchCustomQuery(queryName, galaxyId = null) {
	return (dispatch) => {
		dispatch({ type: FETCH_CUSTOM_QUERY_REQUEST })

		let promise

		switch (queryName) {
			case 'planets-with-life':
				promise = getPlanetsWithLifeByGalaxy(Number(galaxyId))
				break
			case 'planets-with-min-radius-and-max-satelites-count':
				promise = getPlanetsWithMinRadiusAndMaxSatellitesCount()
				break
			case 'planets-with-max-satelites-count-and-min-satellites-volume':
				promise = getPlanetWithMaxSatellitesAndMinSatellitesVolume()
				break
			case 'galaxies-with-max-sum-of-core-temperatures':
				promise = getGalaxyWithMaxSumOfCoreTemperatures()
				break

			default:
				dispatch({
					type: FETCH_CUSTOM_QUERY_FAILURE,
					error: 'Wrong queryName',
				})
				return
		}

		promise.then(
			(payload) => dispatch({
				type: FETCH_CUSTOM_QUERY_SUCCESS,
				payload,
			}),
			(error) => dispatch({
				type: FETCH_CUSTOM_QUERY_FAILURE,
				error,
			})
		)
	}
}