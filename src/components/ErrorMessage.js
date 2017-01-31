import React from 'react'

const onClick = () => { window.location.reload() }

const ErrorMessage = ({ message = 'Something went wrong!' }) => (
	<div>
		<div className="alert alert-danger" role="alert">
			<strong>Error! </strong>{message}
		</div>
		<button type="button" className="btn btn-primary" style={{ cursor: 'pointer' }} onClick={onClick}>Retry</button>
	</div>
)

export default ErrorMessage