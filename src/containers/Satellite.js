import React, { Component } from 'react'
import { connect }          from 'react-redux'
import { Link }             from 'react-router'
import * as actions         from '../actions/Satellite'
import Loading              from '../components/Loading'
import ErrorMessage         from '../components/ErrorMessage'

class Satellite extends Component {
	
	componentDidMount() {
		this.props.fetchSatellite(this.props.params.id)
	}

	componentDidUpdate(prevProps) {
		if (this.props.params.id !== prevProps.params.id) {
			this.props.fetchSatellite(this.props.params.id)
		}
	}

	render() {
		const { satellite, fetching, error } = this.props

		if (fetching) return <Loading />
		if (error)    return <ErrorMessage message={error} />

		return (
			<div>
				<h2>Satellite</h2>
				<table className="table">
					<tbody>
						<tr>
							<th>Name</th>
							<td>{satellite.name}</td>
						</tr>
						<tr>
							<th>Planet</th>
							<td>
								<Link to={`planet/${satellite.planet_id}`}>{satellite.planet_name}</Link>
							</td>
						</tr>
						<tr>
							<th>Radius</th>
							<td>{satellite.radius}</td>
						</tr>
						<tr>
							<th>Distance</th>
							<td>{satellite.distance}</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}

Satellite.propTypes = {
	fetchSatellite: React.PropTypes.func,
	satellite:      React.PropTypes.object,
	fetching:       React.PropTypes.bool,
	error:          React.PropTypes.string,
	params:         React.PropTypes.object,
}

function mapStateToProps(state) {
	return {
		satellite: state.satellite,
		fetching:  state.common.fetching,
		error:     state.common.error,
	}
}

export default connect(mapStateToProps, actions)(Satellite)