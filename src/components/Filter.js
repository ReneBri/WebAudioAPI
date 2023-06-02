import React, {useEffect, useState} from "react";

const Filter = ({changeSettings, changeType, settings}) => {
	let {frequency, detune, Q, gain, type} = settings;
	const [disableQ, setDisableQ] = useState(false);
	const [disableGain, setDisableGain] = useState(false);

	useEffect(() => {
		if (type === "lowshelf" || type === "highshelf") {
			setDisableQ(true);
			setDisableGain(false);
		} else {
			setDisableGain(true);
			setDisableQ(false);
		}
	}, [type]);

	return (
		<div className="control">
			<h2>Filter</h2>
			<div className="params">
				<h3>frequency</h3>
				<input
					type="range"
					max="20000"
					onChange={changeSettings}
					value={frequency}
					id="frequency"
				/>
			</div>

			<div className="params">
				<h3>detune</h3>
				<input
					type="range"
					onChange={changeSettings}
					value={detune}
					id="detune"
					step="0.1"
				/>
			</div>

			<div className="params">
				<h3>Q</h3>
				<input
					type="range"
					max="10"
					onChange={changeSettings}
					value={Q}
					id="Q"
					step="0.1"
					disabled={disableQ}
				/>
			</div>

			<div className="params">
				<h3>gain</h3>
				<input
					type="range"
					max="10"
					onChange={changeSettings}
					value={gain}
					id="gain"
					step="0.1"
					disabled={disableGain}
				/>
			</div>

			<div className="param">
				<h3>Filter Type</h3>
				<button
					id="lowpass"
					onClick={changeType}
					className={`${type === "lowpass" && "active"}`}>
					Lowpass
				</button>
				<button
					id="highpass"
					onClick={changeType}
					className={`${type === "highpass" && "active"}`}>
					Highpass
				</button>
				<button
					id="bandpass"
					onClick={changeType}
					className={`${type === "bandpass" && "active"}`}>
					Bandpass
				</button>
				<button
					id="notch"
					onClick={changeType}
					className={`${type === "notch" && "active"}`}>
					Notch
				</button>
				<button
					id="lowshelf"
					onClick={changeType}
					className={`${type === "lowshelf" && "active"}`}>
					Lowshelf
				</button>
				<button
					id="highshelf"
					onClick={changeType}
					className={`${type === "highshelf" && "active"}`}>
					Highshelf
				</button>
			</div>
		</div>
	);
};

export default Filter;
