import { 
	FETCH_CUSTOM_QUERY_SUCCESS, 
} from '../actions/CustomQuery'
import initialItate from '../store/store'

export default function(state = initialItate.customQuery, action) {
	switch (action.type) {
		case FETCH_CUSTOM_QUERY_SUCCESS:
			return action.payload

		default:
			return state
	}
}