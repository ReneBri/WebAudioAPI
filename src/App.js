import {useState} from "react";
import "./App.scss";

import Osc1 from "./components/Osc1";
import Filter from "./components/Filter";

let actx = new AudioContext();
let out = actx.destination;

let osc1 = actx.createOscillator();
let gain1 = actx.createGain();
let filter = actx.createBiquadFilter();

console.log(filter);

osc1.connect(gain1);
gain1.connect(filter);
filter.connect(out);

function App() {
	const [osc1Settings, setOsc1Settings] = useState({
		frequency: osc1.frequency.value,
		detune: osc1.detune.value,
		type: osc1.type,
	});

	const [filterSettings, setFilterSettings] = useState({
		frequency: filter.frequency.value,
		detune: filter.detune.value,
		Q: filter.Q.value,
		gain: filter.gain.value,
		type: filter.type,
	});

	const changeOsc1 = (e) => {
		const {value, id} = e.target;
		osc1[id].value = value;
		setOsc1Settings({...osc1Settings, [id]: value});
	};

	const changeOsc1Type = (e) => {
		const {id} = e.target;
		osc1.type = id;
		setOsc1Settings({...osc1Settings, type: id});
	};

	const changeFilter = (e) => {
		const {value, id} = e.target;
		filter[id].value = value;
		setFilterSettings({...filterSettings, [id]: value});
	};

	const changeFilterType = (e) => {
		const {id} = e.target;
		filter.type = id;
		setFilterSettings({...filterSettings, type: id});
	};

	return (
		<div className="App">
			<h1>sliders</h1>
			<button onClick={() => osc1.start()}>Start</button>
			<button onClick={() => osc1.stop()}>Stop</button>
			<Osc1
				changeSettings={changeOsc1}
				changeOscType={changeOsc1Type}
				settings={osc1Settings}
			/>
			<Filter
				changeSettings={changeFilter}
				changeType={changeFilterType}
				settings={filterSettings}
			/>
		</div>
	);
}

export default App;
