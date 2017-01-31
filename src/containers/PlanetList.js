import React, { Component } from 'react'
import { connect }          from 'react-redux'
import * as actions         from '../actions/PlanetList'
import Loading              from '../components/Loading'
import ErrorMessage         from '../components/ErrorMessage'
import PlanetTable          from '../components/PlanetTable'

class PlanetList extends Component {
	
	componentDidMount() {
		const { fetchPlanets, planets } = this.props
		if (!planets.length) fetchPlanets()
	}

	render() {
		const { planets, fetching, error } = this.props

		if (fetching) return <Loading />
		if (error)    return <ErrorMessage message={error} />

		return (
			<div>
				<h2>Planets</h2>
				<PlanetTable planets={planets} />
			</div>
		)
	}
}

PlanetList.propTypes = {
	fetchPlanets: React.PropTypes.func,
	planets:      React.PropTypes.array,
	fetching:     React.PropTypes.bool,
	error:        React.PropTypes.string,
}

function mapStateToProps(state) {
	return {
		planets:  state.planets,
		fetching: state.common.fetching,
		error:    state.common.error,
	}
}

export default connect(mapStateToProps, actions)(PlanetList)