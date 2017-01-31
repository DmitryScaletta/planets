import React, { Component } from 'react'
import { Provider }         from 'react-redux'
import { hashHistory, Router, Route, IndexRoute } from 'react-router'
import configureStore       from '../store/configureStore'
import Home                 from '../components/Home'
import Main                 from './Main'
import PlanetList           from './PlanetList'
import Planet               from './Planet'
import Galaxy               from './Galaxy'
import GalaxyList           from './GalaxyList'
import Satellite            from './Satellite'
import SatelliteList        from './SatelliteList'
import CustomQuery          from './CustomQuery'

const store = configureStore()

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={hashHistory}>
					<Route path="/" component={Main}>
						<IndexRoute component={Home} />
						<Route path="planets" component={PlanetList} />
						<Route path="planet/:id" component={Planet} />
						<Route path="galaxies" component={GalaxyList} />
						<Route path="galaxy/:id" component={Galaxy} />
						<Route path="satellites" component={SatelliteList} />
						<Route path="satellite/:id" component={Satellite} />
						<Route path="custom-query/:queryName" component={CustomQuery} />
					</Route>
				</Router>
			</Provider>
		)
	}
}
