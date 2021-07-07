import { Component } from "react";

import "./RAltimeter.css";
import scale from "../../assets/radaltback.png";
import cover from "../../assets/radaltcover.png";
import needle from "../../assets/radaltneedle.png";
import bugImg from "../../assets/bug.png";
import flagImg from "../../assets/radaltflag.png";

class RAltimeter extends Component {
	calculateAngle = (num) => {
		let out = num / 1500;
		out = out * 270;
		return out;
	};

	render() {
		const ndegree = "rotate(" + this.calculateAngle(this.props.altitudeValue) + "deg)";
		const bdegree = "rotate(" + this.calculateAngle(this.props.bugValue) + "deg)";

		let styles;
		if (this.props.light) {
			styles = "lightOn";
		} else {
			styles = "lightOff";
		}
		return (
			<div className="RAltimeter">
				<img src={scale}></img>
				<img src={cover}></img>
				<img src={needle} style={{ transform: ndegree }}></img>
				<img src={bugImg} style={{ transform: bdegree }}></img>
				{!this.props.power ? <img src={flagImg}></img> : null}
				<div className={styles}></div>
			</div>
		);
	}
}

export default RAltimeter;
