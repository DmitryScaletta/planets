import React, { Component } from 'react'
import { connect }          from 'react-redux'
import * as actions         from '../actions/SatelliteList'
import Loading              from '../components/Loading'
import ErrorMessage         from '../components/ErrorMessage'
import SatelliteTable       from '../components/SatelliteTable'

class SatelliteList extends Component {
	
	componentDidMount() {
		const { fetchSatellites, satellites } = this.props
		if (!satellites.length) fetchSatellites()
	}

	render() {
		const { satellites, fetching, error } = this.props

		if (fetching) return <Loading />
		if (error)    return <ErrorMessage message={error} />

		return (
			<div>
				<h2>Satellites</h2>
				<SatelliteTable satellites={satellites} />
			</div>
		)
	}
}

SatelliteList.propTypes = {
	fetchSatellites: React.PropTypes.func,
	satellites:      React.PropTypes.array,
	fetching:        React.PropTypes.bool,
	error:           React.PropTypes.string,
}

function mapStateToProps(state) {
	return {
		satellites: state.satellites,
		fetching:   state.common.fetching,
		error:      state.common.error,
	}
}

export default connect(mapStateToProps, actions)(SatelliteList)