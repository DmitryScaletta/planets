import React, { Component } from 'react'
import { connect }          from 'react-redux'
import { Link }             from 'react-router'
import * as actions         from '../actions/GalaxyList'

class GalaxyList extends Component {
	
	componentDidMount() {
		this.props.fetchGalaxies()
	}

	render() {
		const { galaxies } = this.props
		return (
			<div>
				<h2>Galaxies</h2>
				<table className="table">
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Planets count</th>
						</tr>
					</thead>
					<tbody>
						{ !galaxies ? null : galaxies.map((galaxy) => (
							<tr key={galaxy.id}>
								<td>{galaxy.id}</td>
								<td>
									<Link to={`galaxy/${galaxy.id}`}>{galaxy.name}</Link>
								</td>
								<td>{galaxy.planets_count}</td>
							</tr>
						)) }
					</tbody>
				</table>
			</div>
		)
	}
}

GalaxyList.propTypes = {
	fetchGalaxies: React.PropTypes.func,
	galaxies:      React.PropTypes.array,
	fetching:      React.PropTypes.bool,
	error:         React.PropTypes.string,
}

function mapStateToProps(state) {
	return {
		galaxies: state.galaxies,
		fetching: state.common.fetching,
		error:    state.common.error,
	}
}

export default connect(mapStateToProps, actions)(GalaxyList)