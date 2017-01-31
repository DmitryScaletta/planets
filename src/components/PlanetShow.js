import React    from 'react'
import { Link } from 'react-router'

const PlanetShow = ({ planet }) => {
		
	return (
		<div>
			<h3>Planet: {planet.name}</h3>
			<table className="table">
				<tbody>
					<tr>
						<th width="50%">Galaxy</th>
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
					{ (planet.satellites_count === undefined) ? null : <tr>
						<th>Satellites count</th>
						<td>{planet.satellites_count}</td>
					</tr> }
					{ (planet.satellites_volume === undefined) ? null : <tr>
						<th>Satellites volume</th>
						<td>{planet.satellites_volume}</td>
					</tr> }
				</tbody>
			</table>
		</div>
	)
}

PlanetShow.propTypes = {
	planet: React.PropTypes.object,
}

export default PlanetShow