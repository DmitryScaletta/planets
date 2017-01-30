import React, { Component } from 'react'
import { Provider }         from 'react-redux'
import { hashHistory, Router, Route, /*IndexRoute*/ } from 'react-router'
import configureStore       from '../store/configureStore'
import * as api             from '../api'
import Main                 from './Main'
import Planet               from '../components/Planet'
import Galaxy               from '../components/Galaxy'
import Satellite            from '../components/Satellite'

// console.log(api.getPlanetsWithLifeByGalaxy(12))
// console.table(api.getPlanetsWithMinRadiusAndMaxSatellitesCount())
// console.table(api.getPlanetWithMaxSatellitesAndMinSatellitesVolume())
// console.table(api.getGalaxyWithMaxSumOfCoreTemperatures())

const store = configureStore()

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={hashHistory}>
					<Route path='/' component={Main}>
						{/*<IndexRoute component={Home} />*/}
						<Route path='planet/:id' component={Planet} />
						<Route path='galaxy/:id' component={Galaxy} />
						<Route path='satellite/:id' component={Satellite} />
					</Route>
				</Router>
			</Provider>
		)
	}
}

// App.propTypes = {
	// store: React.PropTypes.object.isRequired,
// }