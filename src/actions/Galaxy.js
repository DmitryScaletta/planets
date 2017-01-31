import { 
	getGalaxy,
	getPlanets,
} from '../api'

export const FETCH_GALAXY_REQUEST = 'FETCH_GALAXY_REQUEST'
export const FETCH_GALAXY_SUCCESS = 'FETCH_GALAXY_SUCCESS'
export const FETCH_GALAXY_FAILURE = 'FETCH_GALAXY_FAILURE'

export function fetchGalaxy(galaxyId) {
	return (dispatch) => {
		dispatch({ type: FETCH_GALAXY_REQUEST })

		const _galaxyId = Number(galaxyId)

		Promise.all([
			getGalaxy (_galaxyId),
			getPlanets(_galaxyId),
		])
		.then(
			(result) => dispatch({
				type:    FETCH_GALAXY_SUCCESS,
				galaxy:  result[0],
				planets: result[1],
			}),
			(error) => dispatch({
				type:  FETCH_GALAXY_FAILURE,
				error: error,
			})
		)
	}
}