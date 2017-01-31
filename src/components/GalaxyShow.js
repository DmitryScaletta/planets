import React    from 'react'
import { Link } from 'react-router'

const GalaxyShow = ({ galaxy }) => {
		
	return (
		<div>
			<h3>Galaxy: {galaxy.name}</h3>
			<table className="table">
				<tbody>
					<tr>
						<th>Planets count</th>
						<td>{galaxy.planets_count}</td>
					</tr>
					{ (galaxy.sum_of_core_temperatures === undefined) ? null : <tr>
						<th>Sum of core temperatures</th>
						<td>{galaxy.sum_of_core_temperatures}</td>
					</tr> }
				</tbody>
			</table>
		</div>
	)
}

GalaxyShow.propTypes = {
	galaxy: React.PropTypes.object,
}

export default GalaxyShow