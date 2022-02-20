import React from "react";

import "./list-item.css";

export class ListItem extends React.Component {
	
	addValue(v) {
		this.props.addValue(this.props.id, v);
	}
	
	render() {
		return (
			<div className = 'list-item'>
				<div className = 'list-item-info'>
					<p className = 'list-item-title'>{ this.props.name }</p>
					<p className = 'list-item-id'>{ this.props.id }</p>
					<p className = 'list-item-count'>{ this.props.count }</p>
				</div>
				<div className = 'list-item-controllers'>
					<div className = 'item-controller'
						 onClick = {this.addValue.bind(this, 1)}>
						<span>+</span>
					</div>
					<div className = 'item-controller'
						 onClick = {this.addValue.bind(this, -1)}
					>
						<span>-</span>
					</div>
				</div>
			</div>
		)
	}
}
