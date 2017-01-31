import { 
	FETCH_PLANET_SUCCESS, 
} from '../actions/Planet'
import initialItate from '../store/store'

export default function(state = initialItate.planet, action) {
	switch (action.type) {
		case FETCH_PLANET_SUCCESS:
			return {
				...state,
				planet:     action.planet,
				satellites: action.satellites,
			}

		default:
			return state
	}
}