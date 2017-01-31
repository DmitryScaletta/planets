import React, { Component } from 'react'
import { connect }          from 'react-redux'
import * as actions         from '../actions/GalaxyList'
import Loading              from '../components/Loading'
import ErrorMessage         from '../components/ErrorMessage'
import GalaxyTable          from '../components/GalaxyTable'

class GalaxyList extends Component {
	
	componentDidMount() {
		const { fetchGalaxies, galaxies } = this.props
		if (!galaxies.length) fetchGalaxies()
	}

	render() {
		const { galaxies, fetching, error } = this.props

		if (fetching) return <Loading />
		if (error)    return <ErrorMessage message={error} />

		return (
			<div>
				<h2>Galaxies</h2>
				<GalaxyTable galaxies={galaxies} />
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