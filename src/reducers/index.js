import { combineReducers } from 'redux'
import common              from './common'
import planets             from './PlanetList'
import galaxies            from './GalaxyList'
import satellites          from './SatelliteList'
import galaxy              from './Galaxy'

const rootReducer = combineReducers({
	common,
	planets,
	galaxies,
	satellites,
	galaxy,
})

export default rootReducer