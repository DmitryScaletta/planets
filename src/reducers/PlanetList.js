import { 
	FETCH_PLANETS_SUCCESS, 
} from '../actions/PlanetList'
import initialItate from '../store/store'

export default function(state = initialItate.planets, action) {
	switch (action.type) {
		case FETCH_PLANETS_SUCCESS:
			return action.items

		default:
			return state
	}
}