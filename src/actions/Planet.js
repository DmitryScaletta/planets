import { 
	getPlanet,
	getSatellites,
} from '../api'

export const FETCH_PLANET_REQUEST = 'FETCH_PLANET_REQUEST'
export const FETCH_PLANET_SUCCESS = 'FETCH_PLANET_SUCCESS'
export const FETCH_PLANET_FAILURE = 'FETCH_PLANET_FAILURE'

export function fetchPlanet(planetId) {
	return (dispatch) => {
		dispatch({ type: FETCH_PLANET_REQUEST })

		const _planetId = Number(planetId)

		Promise.all([
			getPlanet    (_planetId),
			getSatellites(_planetId),
		])
		.then(
			(result) => dispatch({
				type:       FETCH_PLANET_SUCCESS,
				planet:     result[0],
				satellites: result[1],
			}),
			(error) => dispatch({
				type:  FETCH_PLANET_FAILURE,
				error: error,
			})
		)
	}
}