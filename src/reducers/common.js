import { 
	FETCH_GALAXIES_REQUEST, 
	FETCH_GALAXIES_SUCCESS, 
	FETCH_GALAXIES_FAILURE,
} from '../actions/GalaxyList'
import { 
	FETCH_PLANETS_REQUEST, 
	FETCH_PLANETS_SUCCESS, 
	FETCH_PLANETS_FAILURE,
} from '../actions/PlanetList'
import { 
	FETCH_SATELLITES_REQUEST, 
	FETCH_SATELLITES_SUCCESS, 
	FETCH_SATELLITES_FAILURE,
} from '../actions/SatelliteList'
import { 
	FETCH_GALAXY_REQUEST, 
	FETCH_GALAXY_SUCCESS, 
	FETCH_GALAXY_FAILURE,
} from '../actions/Galaxy'
import { 
	FETCH_PLANET_REQUEST, 
	FETCH_PLANET_SUCCESS, 
	FETCH_PLANET_FAILURE,
} from '../actions/Planet'
import { 
	FETCH_SATELLITE_REQUEST, 
	FETCH_SATELLITE_SUCCESS, 
	FETCH_SATELLITE_FAILURE,
} from '../actions/Satellite'
import initialItate from '../store/store'

export default function(state = initialItate.common, action) {
	switch (action.type) {
		
		case FETCH_GALAXIES_REQUEST:
		case FETCH_PLANETS_REQUEST:
		case FETCH_SATELLITES_REQUEST:
		case FETCH_GALAXY_REQUEST:
		case FETCH_PLANET_REQUEST:
		case FETCH_SATELLITE_REQUEST:
			return {
				...state,
				error: '',
				fetching: true,
			}
		case FETCH_GALAXIES_SUCCESS:
		case FETCH_PLANETS_SUCCESS:
		case FETCH_SATELLITES_SUCCESS:
		case FETCH_GALAXY_SUCCESS:
		case FETCH_PLANET_SUCCESS:
		case FETCH_SATELLITE_SUCCESS:
			return {
				...state,
				fetching: false,
			}
		case FETCH_GALAXIES_FAILURE:
		case FETCH_PLANETS_FAILURE:
		case FETCH_SATELLITES_FAILURE:
		case FETCH_GALAXY_FAILURE:
		case FETCH_PLANET_FAILURE:
		case FETCH_SATELLITE_FAILURE:
			return {
				...state,
				error: action.error,
				fetching: false,
			}

		default:
			return state
	}
}