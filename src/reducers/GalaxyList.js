import { 
	FETCH_GALAXIES_SUCCESS, 
} from '../actions/GalaxyList'
import initialItate from '../store/store'

export default function(state = initialItate.galaxies, action) {
	switch (action.type) {
		case FETCH_GALAXIES_SUCCESS:
			return action.items

		default:
			return state
	}
}