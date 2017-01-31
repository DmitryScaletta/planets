import React, { Component } from 'react'
import { connect }          from 'react-redux'
import * as actions         from '../actions/Galaxy'
import Loading              from '../components/Loading'
import ErrorMessage         from '../components/ErrorMessage'
import PlanetTable          from '../components/PlanetTable'

class Galaxy extends Component {
	
	componentDidMount() {
		console.log(this.props.params)
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
				<h2>Galaxy</h2>
				<table className="table">
					<tbody>
						<tr>
							<th>Name</th>
							<td>{galaxy.name}</td>
						</tr>
						<tr>
							<th>Planets count</th>
							<td>{galaxy.planets_count}</td>
						</tr>
					</tbody>
				</table>
				<h4>Planets</h4>
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