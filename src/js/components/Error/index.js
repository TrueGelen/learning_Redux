import React from 'react'
import Alert from '@material-ui/lab/Alert';

const ErrorMessage = ({ errMessage }) => {
	return (
		<div className="row mb-3">
			<div className="col">
				<Alert severity="error">{errMessage}</Alert>
			</div>
		</div>
	)
}

export default ErrorMessage