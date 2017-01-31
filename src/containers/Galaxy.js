import React, { Component } from 'react'
import { connect }          from 'react-redux'
import { Link }             from 'react-router'
import * as actions         from '../actions/Galaxy'
import Loading              from '../components/Loading'
import ErrorMessage         from '../components/ErrorMessage'
import PlanetTable          from '../components/PlanetTable'
import GalaxyShow           from '../components/GalaxyShow'

class Galaxy extends Component {
	
	componentDidMount() {
		this.props.fetchGalaxy(this.props.params.id)
	}

	componentDidUpdate(prevProps) {
		if (this.props.params.id !== prevProps.params.id) {
			this.props.fetchGalaxy(this.props.params.id)
		}
	}

	render() {
		const { galaxy, planets, fetching, error } = this.props

		if (fetching) return <Loading />
		if (error)    return <ErrorMessage message={error} />

		return (
			<div>
				<ol className="breadcrumb">
					<li className="breadcrumb-item"><Link to="galaxies">← Back to galaxies list</Link></li>
				</ol>
				<GalaxyShow galaxy={galaxy} />
				<h5>Planets</h5>
				<PlanetTable planets={planets} />
			</div>
		)
	}
}

Galaxy.propTypes = {
	fetchGalaxy: React.PropTypes.func,
	galaxy:      React.PropTypes.object,
	planets:     React.PropTypes.array,
	fetching:    React.PropTypes.bool,
	error:       React.PropTypes.string,
	params:      React.PropTypes.object,
}

function mapStateToProps(state) {
	return {
		galaxy:   state.galaxy.galaxy,
		planets:  state.galaxy.planets,
		fetching: state.common.fetching,
		error:    state.common.error,
	}
}

export default connect(mapStateToProps, actions)(Galaxy)