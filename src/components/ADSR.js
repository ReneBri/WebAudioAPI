import React, {useContext} from "react";

import {CTX} from "../context/Store";

const ADSR = () => {
	const [appState, updateState] = useContext(CTX);

	// console.log(appState.envelope);

	let {attack, decay, sustain, release} = appState.envelopeSettings;

	const changeSettings = (e) => {
		const {id, value} = e.target;
		updateState({type: "CHANGE_ENVELOPE_SETTINGS", payload: {id, value}});
	};

	return (
		<div className="control">
			<h2>ADSR</h2>
			<div className="param">
				<h3>attack</h3>
				<input
					type="range"
					id="attack"
					onChange={changeSettings}
					value={attack}
					max="2"
					step="0.02"
				/>
			</div>

			<div className="param">
				<h3>decay</h3>
				<input
					type="range"
					id="decay"
					onChange={changeSettings}
					value={decay}
					max="1"
					step="0.1"
				/>
			</div>

			<div className="param">
				<h3>sustain</h3>
				<input
					type="range"
					id="sustain"
					onChange={changeSettings}
					value={sustain}
					max="1"
					step="0.1"
				/>
			</div>

			<div className="param">
				<h3>release</h3>
				<input
					type="range"
					id="release"
					onChange={changeSettings}
					value={release}
					max="2"
					step="0.02"
				/>
			</div>
		</div>
	);
};

export default ADSR;
