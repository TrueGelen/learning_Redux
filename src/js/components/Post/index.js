import React from 'react'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default function Prost({ title, body, ...otherProps }) {

	return (
		<div className="row">
			<div className="col">
				<Card variant="outlined" className="mt-3">
					<h2 className="text-center">{title}</h2>
					<p>{body}</p>
				</Card>
			</div>
		</div>
	)
}