import React, { Component } from 'react'
import { connect }          from 'react-redux'
import { Link }             from 'react-router'
import * as actions         from '../actions/CustomQuery'
import { fetchGalaxies }    from '../actions/GalaxyList'
import Loading              from '../components/Loading'
import ErrorMessage         from '../components/ErrorMessage'
import SatelliteTable       from '../components/SatelliteTable'
import GalaxyTable          from '../components/GalaxyTable'
import GalaxyShow           from '../components/GalaxyShow'
import PlanetShow           from '../components/PlanetShow'

class Galaxy extends Component {
	
	constructor(props) {
		super(props)
		this.state = { galaxyId: 0 }

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		const galaxyId = Number(event.target.value)
		this.setState({ galaxyId })
		if (galaxyId) this.props.fetchCustomQuery(this.props.params.queryName, galaxyId)
	}

	fetchData() {
		switch (this.props.params.queryName) {
			case 'planets-with-life':
				if (!this.props.galaxies.length) this.props.fetchGalaxies()
				break
			case 'planets-with-min-radius-and-max-satelites-count':
			case 'planets-with-max-satelites-count-and-min-satellites-volume':
			case 'galaxies-with-max-sum-of-core-temperatures':
				this.props.fetchCustomQuery(this.props.params.queryName)
				break
		}
	}

	componentDidMount() {
		this.fetchData()
	}

	componentDidUpdate(prevProps) {
		if (this.props.params.queryName !== prevProps.params.queryName) {
			this.fetchData()
		}
	}

	render() {
		const { data, galaxies, params: { queryName }, fetching, error } = this.props

		if (fetching) return <Loading />
		if (error)    return <ErrorMessage message={error} />
		
		switch (queryName) {
			case 'planets-with-life':
				return (
					<div>
						<div className="form-group">
							<label htmlFor="galaxy">Select galaxy</label>
							<select className="form-control" id="galaxy" value={this.state.galaxyId} onChange={this.handleChange}>
								<option value="0"></option>
								{ galaxies.map((galaxy) => (
									<option key={galaxy.id} value={galaxy.id}>{galaxy.name}</option>
								)) }
							</select>
						</div>
						{ (!data.length && this.state.galaxyId) ? <span>There is no life in this galaxy</span> : data.map((planet) => (
							<div key={planet.id} style={{marginBottom: '50px'}}>
								<PlanetShow planet={planet} />
								<h5>Satellites</h5>
								<SatelliteTable satellites={planet.satellites} />
							</div>
						)) }
					</div>
				)
			case 'planets-with-min-radius-and-max-satelites-count':
			case 'planets-with-max-satelites-count-and-min-satellites-volume':
				return (
					<div>
						{ data.map((planet) => (
							<div key={planet.id} style={{marginBottom: '50px'}}>
								<PlanetShow planet={planet} />
								<h5>Satellites</h5>
								<SatelliteTable satellites={planet.satellites} />
							</div>
						)) }
					</div>
				)
			case 'galaxies-with-max-sum-of-core-temperatures':
				return (
					<div>
						{ !data.length ? null : <GalaxyShow galaxy={data[0]} /> }
						<table className="table">
							<thead>
								<tr>
									<th>ID</th>
									<th>Name</th>
									<th>Sum of core temperatures</th>
								</tr>
							</thead>
							<tbody>
								{ !data.length ? null : data.map((galaxy) => (
									<tr key={galaxy.id}>
										<td>{galaxy.id}</td>
										<td>
											<Link to={`galaxy/${galaxy.id}`}>{galaxy.name}</Link>
										</td>
										<td>{galaxy.sum_of_core_temperatures}</td>
									</tr>
								)) }
							</tbody>
						</table>
					</div>
				)

			default:
				return <ErrorMessage />
		}
	}
}

Galaxy.propTypes = {
	fetchCustomQuery: React.PropTypes.func,
	fetchGalaxies:    React.PropTypes.func,
	data:             React.PropTypes.array,
	galaxies:         React.PropTypes.array,
	fetching:         React.PropTypes.bool,
	error:            React.PropTypes.string,
	params:           React.PropTypes.object,
}

function mapStateToProps(state) {
	return {
		data:     state.customQuery,
		galaxies: state.galaxies,
		fetching: state.common.fetching,
		error:    state.common.error,
	}
}

export default connect(mapStateToProps, {
	...actions,
	fetchGalaxies,
})(Galaxy)