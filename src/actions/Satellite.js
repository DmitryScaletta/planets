import { getSatellite } from '../api'

export const FETCH_SATELLITE_REQUEST = 'FETCH_SATELLITE_REQUEST'
export const FETCH_SATELLITE_SUCCESS = 'FETCH_SATELLITE_SUCCESS'
export const FETCH_SATELLITE_FAILURE = 'FETCH_SATELLITE_FAILURE'

export function fetchSatellite(satelliteId) {
	return (dispatch) => {
		dispatch({ type: FETCH_SATELLITE_REQUEST })

		const _satelliteId = Number(satelliteId)

		getSatellite(_satelliteId)
		.then(
			(result) => dispatch({
				type:      FETCH_SATELLITE_SUCCESS,
				satellite: result,
			}),
			(error) => dispatch({
				type:  FETCH_SATELLITE_FAILURE,
				error: error,
			})
		)
	}
}