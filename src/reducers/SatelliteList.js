import { 
	FETCH_SATELLITES_SUCCESS, 
} from '../actions/SatelliteList'
import initialItate from '../store/store'

export default function(state = initialItate.satellites, action) {
	switch (action.type) {
		case FETCH_SATELLITES_SUCCESS:
			return action.items

		default:
			return state
	}
}