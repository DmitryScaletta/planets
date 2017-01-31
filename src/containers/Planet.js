import React, { Component } from 'react'
import { connect }          from 'react-redux'
import { Link }             from 'react-router'
import * as actions         from '../actions/Planet'
import Loading              from '../components/Loading'
import ErrorMessage         from '../components/ErrorMessage'
import SatelliteTable       from '../components/SatelliteTable'

class Planet extends Component {
	
	componentDidMount() {
		this.props.fetchPlanet(this.props.params.id)
	}

	componentDidUpdate(prevProps) {
		if (this.props.params.id !== prevProps.params.id) {
			this.props.fetchPlanet(this.props.params.id)
		}
	}

	render() {
		const { planet, satellites, fetching, error } = this.props

		if (fetching) return <Loading />
		if (error)    return <ErrorMessage message={error} />

		return (
			<div>
				<h2>Planet</h2>
				<table className="table">
					<tbody>
						<tr>
							<th>Name</th>
							<td>{planet.name}</td>
						</tr>
						<tr>
							<th>Galaxy</th>
							<td>
								<Link to={`galaxy/${planet.galaxy_id}`}>{planet.galaxy_name}</Link>
							</td>
						</tr>
						<tr>
							<th>Radius</th>
							<td>{planet.radius}</td>
						</tr>
						<tr>
							<th>Core temperature</th>
							<td>{planet.core_temperature}</td>
						</tr>
						<tr>
							<th>Atmosphere</th>
							<td>{planet.atmosphere ? 'Yes' : 'No'}</td>
						</tr>
						<tr>
							<th>Life</th>
							<td>{planet.life ? 'Yes' : 'No'}</td>
						</tr>
					</tbody>
				</table>
				<h5>Satellites</h5>
				<SatelliteTable satellites={satellites} />
			</div>
		)
	}
}

Planet.propTypes = {
	fetchPlanet: React.PropTypes.func,
	planet:      React.PropTypes.object,
	satellites:  React.PropTypes.array,
	fetching:    React.PropTypes.bool,
	error:       React.PropTypes.string,
	params:      React.PropTypes.object,
}

function mapStateToProps(state) {
	return {
		planet:     state.planet.planet,
		satellites: state.planet.satellites,
		fetching:   state.common.fetching,
		error:      state.common.error,
	}
}

export default connect(mapStateToProps, actions)(Planet)