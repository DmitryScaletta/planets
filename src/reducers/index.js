import { combineReducers } from 'redux'
import common              from './common'
import planets             from './PlanetList'
import galaxies            from './GalaxyList'
import satellites          from './SatelliteList'
import galaxy              from './Galaxy'
import planet              from './Planet'
import satellite           from './Satellite'
import customQuery         from './CustomQuery'

const rootReducer = combineReducers({
	common,
	planets,
	galaxies,
	satellites,
	galaxy,
	planet,
	satellite,
	customQuery,
})

export default rootReducer