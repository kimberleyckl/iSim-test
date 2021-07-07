import { Component } from "react";
import "./App.css";
import RAltimeter from "./components/RAltimeter/RAltimeter";
import Controller from "./components/Controller/Controller";

class App extends Component {
	state = {
		altitudeSlider: 0,
		altitudeStuck: 0,
		bug: 0,
		powersOn: true,
		lightsOn: false,
		altitudeAbove: false,
	};

	altitudeChangeHandler = (event) => {
		const num = event.target.value;
		this.setState({ altitudeSlider: num });
		if (Number(num) > Number(this.state.bug)) {
			if (!this.state.altitudeAbove) {
				this.setState({ altitudeAbove: true });
			}
			this.setState({ lightsOn: false });
		} else if (Number(num) < Number(this.state.bug) && this.state.altitudeAbove) {
			this.setState({ lightsOn: true });
		}
	};

	bugChangeHandler = (event) => {
		const num = event.target.value;
		this.setState({ bug: num });
		if (Number(num) > Number(this.state.altitudeSlider)) {
			this.setState({ altitudeAbove: false });
		}
	};

	powerClickedHandler = (event) => {
		let newState = event.target.checked;
		this.setState({ powersOn: newState });
		if (!newState) {
			const num = this.state.altitudeSlider;
			this.setState({ altitudeStuck: num });
			// this.setState({ altitudeAbove: false });
		}
	};

	render() {
		return (
			<div>
				<h1>Radar Altimeter</h1>
				<RAltimeter
					power={this.state.powersOn}
					altitudeValue={this.state.powersOn ? this.state.altitudeSlider : this.state.altitudeStuck}
					bugValue={this.state.bug}
					light={this.state.powersOn ? this.state.lightsOn : false}
				/>
				<Controller
					altitudeChange={this.altitudeChangeHandler}
					altitudeValue={this.state.altitudeSlider}
					bugChange={this.bugChangeHandler}
					bugValue={this.state.bug}
					powerClicked={this.powerClickedHandler}
					power={this.state.powersOn}
				></Controller>
			</div>
		);
	}
}

export default App;
