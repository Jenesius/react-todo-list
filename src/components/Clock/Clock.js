import React from "react";

class Clock extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			isStopped: false,
			date: new Date()
		}
	}
	
	tick(){
		this.setState({
			date: new Date()
		})
	}
	
	componentDidMount() {
		this.timerId = setInterval(this.tick.bind(this), 1000);
	}
	componentWillUnmount() {
		clearInterval(this.timerId);
	}
	toggleClock(){
		this.setState(prevState => ({
			isStopped: !prevState.isStopped
		}))
	}
	render() {
		
		return (
			<div>
				<p>Time {this.state.isStopped ? 'was stopped.' : ': ' + this.state.date.toLocaleTimeString()}</p>
				<button
					className = 'clock-button'
					onClick   = {this.toggleClock.bind(this)}
				>
					{this.state.isStopped ? 'Start' : 'Stop'}
				</button>
			</div>
		)
		
	}
}
export default Clock;
