import { combineReducers } from 'redux'
import common              from './common'
import planets             from './PlanetList'
import galaxies            from './GalaxyList'
import satellites          from './SatelliteList'
import galaxy              from './Galaxy'
import planet              from './Planet'
import satellite           from './Satellite'

const rootReducer = combineReducers({
	common,
	planets,
	galaxies,
	satellites,
	galaxy,
	planet,
	satellite,
})

export default rootReducer