import { 
	FETCH_GALAXY_SUCCESS, 
} from '../actions/Galaxy'
import initialItate from '../store/store'

export default function(state = initialItate.galaxy, action) {
	switch (action.type) {
		case FETCH_GALAXY_SUCCESS:
			return {
				...state,
				galaxy:  action.galaxy,
				planets: action.planets,
			}

		default:
			return state
	}
}