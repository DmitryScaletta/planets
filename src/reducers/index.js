import { combineReducers } from 'redux'
import common              from './common'
import planets             from './PlanetList'
import galaxies            from './GalaxyList'
import satellites          from './SatelliteList'

const rootReducer = combineReducers({
	common,
	planets,
	galaxies,
	satellites,
})

export default rootReducer