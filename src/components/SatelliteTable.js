import React    from 'react'
import { Link } from 'react-router'

const SatelliteTable = ({ satellites = [] }) => {
	
	if (!satellites) return <div>No satellites</div>
	
	return (
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
	)
}

SatelliteTable.propTypes = {
	satellites: React.PropTypes.array,
}

export default SatelliteTable