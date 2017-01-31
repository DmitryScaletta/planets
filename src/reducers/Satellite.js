import { 
	FETCH_SATELLITE_SUCCESS, 
} from '../actions/Satellite'
import initialItate from '../store/store'

export default function(state = initialItate.satellite, action) {
	switch (action.type) {
		case FETCH_SATELLITE_SUCCESS:
			return action.satellite

		default:
			return state
	}
}