import {useContext} from "react";
import {CTX} from "../context/Store";

const Osc1 = () => {
	const [appState, updateState] = useContext(CTX);

	let {type, detune} = appState.osc1Settings;

	const changeSettings = (e) => {
		let {id, value} = e.target;
		updateState({type: "CHANGE_OSC1", payload: {id, value}});
	};

	const changeOscType = (e) => {
		updateState({type: "CHANGE_OSC1_TYPE", payload: e.target.id});
	};

	return (
		<div className="control">
			<h2>osc 1</h2>

			<div className="param">
				<h3>detune</h3>
				<input onChange={changeSettings} type="range" value={detune} id="detune" />
			</div>

			<div className="param">
				<h3>Wave</h3>
				<button
					id="sine"
					onClick={changeOscType}
					className={`${type === "sine" && "active"}`}>
					Sine
				</button>
				<button
					id="triangle"
					onClick={changeOscType}
					className={`${type === "triangle" && "active"}`}>
					Triangle
				</button>
				<button
					id="sawtooth"
					onClick={changeOscType}
					className={`${type === "sawtooth" && "active"}`}>
					Sawtooth
				</button>
				<button
					id="square"
					onClick={changeOscType}
					className={`${type === "square" && "active"}`}>
					Square
				</button>
			</div>
		</div>
	);
};

export default Osc1;
