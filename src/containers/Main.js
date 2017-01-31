import React, { Component } from 'react'
import { Link }             from 'react-router'

class Main extends Component {
	render() {
		const isActive = (s) => (this.props.location.pathname.indexOf(s) === 0) || (this.props.location.pathname.indexOf(s) === 1)

		const mainMenu = [
			{	title: 'Galaxies',		url: 'galaxies',	active: isActive('/galax') },
			{	title: 'Planets',		url: 'planets',		active: isActive('/planet') },
			{	title: 'Satellites',	url: 'satellites',	active: isActive('/satellite') },
		]

		const leftMenu = [
			{	title: 'Galaxies', 		url: 'galaxies',	},
			{	title: 'Planets', 		url: 'planets',		},
			{	title: 'Satellites', 	url: 'satellites',	},
			{	title: '',				url: '',			disabled: true },
			{	title:  'Planets with life',
				url:    'custom-query/planets-with-life',
			},
			{	title:  'Planets with min radius and max satellites count',
				url:    'custom-query/planets-with-min-radius-and-max-satelites-count',
			},
			{	title:  'Planets with max satellites count and min satellites volume',
				url:    'custom-query/planets-with-max-satelites-count-and-min-satellites-volume',
			},
			{	title:  'Galaxies with max sum of core temperatures',
				url:    'custom-query/galaxies-with-max-sum-of-core-temperatures',
			},
		]

		return (
			<div>
				<nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
					<div className="container">
						<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<a className="navbar-brand" href="#">Planets</a>

						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav mr-auto">
								{ mainMenu.map((item, key) => (
									<li key={key} className={item.active ? 'nav-item active' : 'nav-item'}>
										<Link 
											className="nav-link"
											to={item.active ? '' : item.url}
										>
											{item.title}
										</Link>
									</li>
								)) }
							</ul>
						</div>
					</div>
				</nav>
				<div className="container" style={{margin: '20px auto'}}>
					<div className="row">
						<div className="col-xs-12 col-md-12 col-lg-3 col-xl-3">
							<div className="list-group">
								{ leftMenu.map((item, key) => (
									<Link
										key={key}
										className={item.disabled ? 'list-group-item list-group-item-action disabled' : 'list-group-item list-group-item-action'}
										activeClassName={'list-group-item active'}
										to={item.url}
									>
										{item.title}
									</Link>
								)) }
							</div>
						</div>
						<div className="col-xs-12 col-md-12 col-lg-9 col-xs-9">
							{this.props.children}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

Main.propTypes = {
	children: React.PropTypes.node,
	location: React.PropTypes.object,
}

export default Main