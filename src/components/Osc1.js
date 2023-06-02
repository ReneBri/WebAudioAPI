const Osc1 = ({changeSettings, settings, changeOscType}) => {
	return (
		<div className="control">
			<h2>osc 1</h2>
			<div className="param">
				<h3>frequency</h3>
				<input
					onChange={changeSettings}
					type="range"
					max="5000"
					value={settings.frequency}
					id="frequency"
					step="0.1"
				/>
			</div>

			<div className="param">
				<h3>detune</h3>
				<input onChange={changeSettings} type="range" value={settings.detune} id="detune" />
			</div>

			<div className="param">
				<h3>Wave</h3>
				<button
					id="sine"
					onClick={changeOscType}
					className={`${settings.type === "sine" && "active"}`}>
					Sine
				</button>
				<button
					id="triangle"
					onClick={changeOscType}
					className={`${settings.type === "triangle" && "active"}`}>
					Triangle
				</button>
				<button
					id="sawtooth"
					onClick={changeOscType}
					className={`${settings.type === "sawtooth" && "active"}`}>
					Sawtooth
				</button>
				<button
					id="square"
					onClick={changeOscType}
					className={`${settings.type === "square" && "active"}`}>
					Square
				</button>
			</div>
		</div>
	);
};

export default Osc1;
