import React    from 'react'
import { Link } from 'react-router'

const SatelliteShow = ({ satellite }) => {
		
	return (
		<div>
			<h3>Satellite: {satellite.name}</h3>
			<table className="table">
				<tbody>
					<tr>
						<th width="50%">Planet</th>
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

SatelliteShow.propTypes = {
	satellite: React.PropTypes.object,
}

export default SatelliteShow