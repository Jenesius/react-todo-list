import React from "react";

import "./list.css";
import {ListItem} from "../ListItem/list-item";

export default class List extends React.Component{
	
	constructor(props) {
		super(props);
		
		this.state = {
			list: [
				{
					name: 'Jenesius',
					id  : 0
				},
				{
					name: 'Burdin',
					id  : 1
				}
			]
		}
		
	}
	
	addValue(id, value) {
		console.log('In list', id, value);
	}
	
	render() {
		return (
			<div className = "container-list">
				{
					this.state.list.map(elem =>
						<ListItem
							name = {elem.name}
							id = {elem.id}
							addValue = {this.addValue.bind(this)}
							
							key = {elem.id}
						/>
					)
				}
			</div>
		)
	
	}
	
}
