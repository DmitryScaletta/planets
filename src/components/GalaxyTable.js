import React    from 'react'
import { Link } from 'react-router'

const GalaxyTable = ({ galaxies = [] }) => {
	
	if (!galaxies.length) return <div>No galaxies</div>
	
	return (
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
	)
}

GalaxyTable.propTypes = {
	galaxies: React.PropTypes.array,
}

export default GalaxyTable