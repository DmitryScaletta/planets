import React, { Component } from 'react'
import { Provider }         from 'react-redux'
import { hashHistory, Router, Route, /*IndexRoute*/ } from 'react-router'
import configureStore       from '../store/configureStore'
import Main                 from './Main'
import PlanetList           from './PlanetList'
import Planet               from '../components/Planet'
import Galaxy               from '../components/Galaxy'
import GalaxyList           from './GalaxyList'
import Satellite            from '../components/Satellite'
import SatelliteList        from './SatelliteList'

// console.log(api.getPlanetsWithLifeByGalaxy(12))
// console.table(api.getPlanetsWithMinRadiusAndMaxSatellitesCount())
// console.table(api.getPlanetWithMaxSatellitesAndMinSatellitesVolume())
// console.table(api.getGalaxyWithMaxSumOfCoreTemperatures())
// console.table(api.getPlanets())
// console.table(api.getGalaxies())
// console.table(api.getSatellites())

const store = configureStore()

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={hashHistory}>
					<Route path='/' component={Main}>
						{/*<IndexRoute component={Home} />*/}
						<Route path='planets' component={PlanetList} />
						<Route path='planet/:id' component={Planet} />
						<Route path='galaxies' component={GalaxyList} />
						<Route path='galaxy/:id' component={Galaxy} />
						<Route path='satellites' component={SatelliteList} />
						<Route path='satellite/:id' component={Satellite} />
					</Route>
				</Router>
			</Provider>
		)
	}
}
