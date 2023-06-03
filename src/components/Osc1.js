import {useContext} from "react";
import {CTX} from "../context/Store";

const Osc1 = ({title, oscSettings, changeOscSettings, changeOscType}) => {
	const [appState, updateState] = useContext(CTX);

	let {type, detune, gain} = oscSettings;

	return (
		<div className="control">
			<h2>{title}</h2>

			<div className="param">
				<h3>gain</h3>
				<input
					onChange={changeOscSettings}
					type="range"
					value={gain}
					id="gain"
					max="1"
					step="0.01"
				/>
			</div>

			<div className="param">
				<h3>detune</h3>
				<input onChange={changeOscSettings} type="range" value={detune} id="detune" />
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
