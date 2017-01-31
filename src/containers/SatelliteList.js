import React, { Component } from 'react'
import { connect }          from 'react-redux'
import { Link }             from 'react-router'
import * as actions         from '../actions/SatelliteList'
import Loading              from '../components/Loading'
import ErrorMessage         from '../components/ErrorMessage'

class SatelliteList extends Component {
	
	componentDidMount() {
		const { fetchSatellites, satellites } = this.props
		if (!satellites.length) fetchSatellites()
	}

	render() {
		const { satellites, fetching, error } = this.props

		if (fetching) return <Loading />
		if (error)    return <ErrorMessage message={error} />

		return (
			<div>
				<h2>Satellites</h2>
				<table className="table">
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Planet</th>
							<th>Radius</th>
							<th>Distance</th>
						</tr>
					</thead>
					<tbody>
						{ !satellites ? null : satellites.map((satellite) => (
							<tr key={satellite.id}>
								<td>{satellite.id}</td>
								<td>
									<Link to={`satellite/${satellite.id}`}>{satellite.name}</Link>
								</td>
								<td>
									<Link to={`planet/${satellite.planet_id}`}>{satellite.planet_name}</Link>
								</td>
								<td>{satellite.radius}</td>
								<td>{satellite.distance}</td>
							</tr>
						)) }
					</tbody>
				</table>
			</div>
		)
	}
}

SatelliteList.propTypes = {
	fetchSatellites: React.PropTypes.func,
	satellites:      React.PropTypes.array,
	fetching:        React.PropTypes.bool,
	error:           React.PropTypes.string,
}

function mapStateToProps(state) {
	return {
		satellites: state.satellites,
		fetching:   state.common.fetching,
		error:      state.common.error,
	}
}

export default connect(mapStateToProps, actions)(SatelliteList)