import React    from 'react'
import { Link } from 'react-router'

const PlanetTable = ({ planets = [] }) => {
	
	if (!planets) return <div>No planets</div>
	
	return (
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
				{ planets.map((planet) => (
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
	)
}

PlanetTable.propTypes = {
	planets: React.PropTypes.array,
}

export default PlanetTable