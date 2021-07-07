import { Component } from "react";
import "./Controller.css";

class Controller extends Component {
	render() {
		return (
			<div>
				<div>
					<span>Altitude:</span>
					<input type="range" min="0" max="1500" value={this.props.altitudeValue} onChange={this.props.altitudeChange}></input>
					<span>{this.props.altitudeValue}</span>
				</div>

				<div>
					<span>Bug:</span>
					<input type="range" min="0" max="1500" value={this.props.bugValue} onChange={this.props.bugChange}></input>
					<span>{this.props.bugValue}</span>
				</div>

				<div>
					<span>Has power:</span>
					<input type="checkbox" onChange={this.props.powerClicked} checked={this.props.power}></input>
				</div>
			</div>
		);
	}
}

export default Controller;
