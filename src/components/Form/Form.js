import React from "react";

export default class Form extends React.Component{
	
	constructor(props) {
		super(props);
		
		this.state = {
			value: ''
		}
		
		//this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(e){
		const value = e.target.value;
		
		this.setState({
			value
		})
		
	}
	
	render() {
		return (
			<form>
				<p>Login ({this.state.value})</p>
				<input type = "text" value = {this.state.value} onChange={this.handleChange.bind(this)}/>
			</form>
		)
	}
	
}
