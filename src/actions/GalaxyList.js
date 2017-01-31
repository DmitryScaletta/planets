import { getGalaxies } from '../api'

export const FETCH_GALAXIES_REQUEST = 'FETCH_GALAXIES_REQUEST'
export const FETCH_GALAXIES_SUCCESS = 'FETCH_GALAXIES_SUCCESS'
export const FETCH_GALAXIES_FAILURE = 'FETCH_GALAXIES_FAILURE'

export function fetchGalaxies() {
	return (dispatch) => {
		dispatch({ type: FETCH_GALAXIES_REQUEST })

		getGalaxies().then(
			(result) => dispatch({
				type: FETCH_GALAXIES_SUCCESS,
				items: result,
			}),
			(error) => dispatch({
				type: FETCH_GALAXIES_FAILURE,
				error: error,
			})
		)
	}
}