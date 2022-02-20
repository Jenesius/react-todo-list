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
					id  : 0,
					count: 0
				},
				{
					name: 'Burdin',
					count: 0,
					id  : 1
				}
			]
		}
		
	}
	
	addValue(id, value) {
		console.log('In list', id, value);
		
		this.setState({
			list: this.state.list.map(elem => {
				if (elem.id === id) elem.count += value;
				return elem;
			})
		})
		
	}
	
	render() {
		return (
			<div className = "container-list">
				{
					this.state.list.map(elem =>
						<ListItem
							name = {elem.name}
							id = {elem.id}
							count = {elem.count}
							addValue = {this.addValue.bind(this)}
							
							key = {elem.id}
						/>
					)
				}
			</div>
		)
	
	}
	
}
