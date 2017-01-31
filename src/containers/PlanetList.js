import React, { Component } from 'react'
import { connect }          from 'react-redux'
import { Link }             from 'react-router'
import * as actions         from '../actions/PlanetList'

class PlanetList extends Component {
	
	componentDidMount() {
		this.props.fetchPlanets()
	}

	render() {
		const { planets } = this.props
		return (
			<div>
				<h2>Planets</h2>
				<table className="table">
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Galaxy</th>
							<th>Radius</th>
							<th>Core °C</th>
							<th>Atm.</th>
							<th>Life</th>
						</tr>
					</thead>
					<tbody>
						{ !planets ? null : planets.map((planet) => (
							<tr key={planet.id}>
								<td>{planet.id}</td>
								<td>
									<Link to={`planet/${planet.id}`}>{planet.name}</Link>
								</td>
								<td>
									<Link to={`galaxy/${planet.galaxy_id}`}>{planet.galaxy_name}</Link>
								</td>
								<td>{planet.radius}</td>
								<td>{planet.core_temperature}</td>
								<td>{planet.atmosphere ? 'Yes' : 'No'}</td>
								<td>{planet.life ? 'Yes' : 'No'}</td>
							</tr>
						)) }
					</tbody>
				</table>
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