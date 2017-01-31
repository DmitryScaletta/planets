import { getPlanets } from '../api'

export const FETCH_PLANETS_REQUEST = 'FETCH_PLANETS_REQUEST'
export const FETCH_PLANETS_SUCCESS = 'FETCH_PLANETS_SUCCESS'
export const FETCH_PLANETS_FAILURE = 'FETCH_PLANETS_FAILURE'

export function fetchPlanets() {
	return (dispatch) => {
		dispatch({ type: FETCH_PLANETS_REQUEST })

		getPlanets().then(
			(result) => dispatch({
				type: FETCH_PLANETS_SUCCESS,
				items: result,
			}),
			(error) => dispatch({
				type: FETCH_PLANETS_FAILURE,
				error: error,
			})
		)
	}
}