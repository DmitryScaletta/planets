import React, { Component } from 'react'
import { connect }          from 'react-redux'
import { Link }             from 'react-router'
import * as actions         from '../actions/Satellite'
import Loading              from '../components/Loading'
import ErrorMessage         from '../components/ErrorMessage'
import SatelliteShow        from '../components/SatelliteShow'

class Satellite extends Component {
	
	componentDidMount() {
		this.props.fetchSatellite(this.props.params.id)
	}

	componentDidUpdate(prevProps) {
		if (this.props.params.id !== prevProps.params.id) {
			this.props.fetchSatellite(this.props.params.id)
		}
	}

	render() {
		const { satellite, fetching, error } = this.props

		if (fetching) return <Loading />
		if (error)    return <ErrorMessage message={error} />

		return (
			<div>
				<ol className="breadcrumb">
					<li className="breadcrumb-item"><Link to="satellites">← Back to satellites list</Link></li>
				</ol>
				<SatelliteShow satellite={satellite} />
			</div>
		)
	}
}

Satellite.propTypes = {
	fetchSatellite: React.PropTypes.func,
	satellite:      React.PropTypes.object,
	fetching:       React.PropTypes.bool,
	error:          React.PropTypes.string,
	params:         React.PropTypes.object,
}

function mapStateToProps(state) {
	return {
		satellite: state.satellite,
		fetching:  state.common.fetching,
		error:     state.common.error,
	}
}

export default connect(mapStateToProps, actions)(Satellite)