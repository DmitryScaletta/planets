import { getSatellites } from '../api'

export const FETCH_SATELLITES_REQUEST = 'FETCH_SATELLITES_REQUEST'
export const FETCH_SATELLITES_SUCCESS = 'FETCH_SATELLITES_SUCCESS'
export const FETCH_SATELLITES_FAILURE = 'FETCH_SATELLITES_FAILURE'

export function fetchSatellites() {
	return (dispatch) => {
		dispatch({ type: FETCH_SATELLITES_REQUEST })

		return getSatellites().then(
			(result) => dispatch({
				type: FETCH_SATELLITES_SUCCESS,
				items: result,
			}),
			(error) => dispatch({
				type: FETCH_SATELLITES_FAILURE,
				error: error,
			})
		)
	}
}