import React, { Component } from 'react'
import { Provider }         from 'react-redux'
import { hashHistory, Router, Route, /*IndexRoute*/ } from 'react-router'
import configureStore       from '../store/configureStore'
import * as api             from '../api'

// console.log(api.getPlanetsWithLifeByGalaxy(12))
// console.table(api.getPlanetsWithMinRadiusAndMaxSatellitesCount())
// console.table(api.getPlanetWithMaxSatellitesAndMinSatellitesVolume())
// console.table(api.getGalaxyWithMaxSumOfCoreTemperatures())

const Main = () =>
	<div>
		No content here. We only test the build process 😉
	</div>

const store = configureStore()

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={hashHistory}>
					<Route path='/' component={Main}>
						{/*<IndexRoute component={Home} />*/}
					</Route>
				</Router>
			</Provider>
		)
	}
}

// App.propTypes = {
	// store: React.PropTypes.object.isRequired,
// }