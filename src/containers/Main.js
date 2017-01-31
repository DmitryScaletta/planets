import React, { Component } from 'react'
import { Link }             from 'react-router'

class Main extends Component {
	render() {
		const isActive = (s) => this.props.location.pathname.indexOf(s) === 0
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
								<li className={isActive('/galax') ? 'nav-item active' : 'nav-item'}>
									<Link className="nav-link" to="galaxies">Galaxies</Link>
								</li>
								<li className={isActive('/planet') ? 'nav-item active' : 'nav-item'}>
									<Link className="nav-link" to="planets">Planets</Link>
								</li>
								<li className={isActive('/satellite') ? 'nav-item active' : 'nav-item'}>
									<Link className="nav-link" to="satellites">Satellites</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				<div className="container" style={{margin: '20px auto'}}>
					<div className="row">
						<div className="col-xs-12 col-md-12 col-lg-3 col-xl-3">
							<div className="list-group">
								<Link className='list-group-item list-group-item-action' to="/">Main</Link>
								<Link className={isActive('/galax')     ? 'list-group-item active' : 'list-group-item list-group-item-action'} to="galaxies">Galaxies</Link>
								<Link className={isActive('/planet')    ? 'list-group-item active' : 'list-group-item list-group-item-action'} to="planets">Planets</Link>
								<Link className={isActive('/satellite') ? 'list-group-item active' : 'list-group-item list-group-item-action'} to="satellites">Satellites</Link>
								<a className="list-group-item list-group-item-action disabled"></a>
								<a href="#" className="list-group-item list-group-item-action">Planets with life</a>
								<a href="#" className="list-group-item list-group-item-action">Planets with min radius</a>
								<a href="#" className="list-group-item list-group-item-action">Planets with max satellites count</a>
								<a href="#" className="list-group-item list-group-item-action">Galaxies with max sum of core temperatures</a>
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