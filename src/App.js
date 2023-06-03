import {useContext} from "react";
import "./App.scss";

import Osc1 from "./components/Osc1";
import Filter from "./components/Filter";
import Keyboard from "./components/Keyboard";

import {CTX} from "./context/Store";
import ADSR from "./components/ADSR";

function App() {
	const [appState, updateState] = useContext(CTX);

	const changeOsc1Settings = (e) => {
		let {id, value} = e.target;
		updateState({type: "CHANGE_OSC1", payload: {id, value}});
	};

	const changeOsc1Type = (e) => {
		updateState({type: "CHANGE_OSC1_TYPE", payload: e.target.id});
	};

	const changeOsc2Settings = (e) => {
		let {id, value} = e.target;
		updateState({type: "CHANGE_OSC2", payload: {id, value}});
	};

	const changeOsc2Type = (e) => {
		updateState({type: "CHANGE_OSC2_TYPE", payload: e.target.id});
	};

	return (
		<div className="App">
			<h1>sliders</h1>
			<Osc1
				title="osc 1"
				oscSettings={appState.osc1Settings}
				changeOscSettings={changeOsc1Settings}
				changeOscType={changeOsc1Type}
			/>
			<Osc1
				title="osc 2"
				oscSettings={appState.osc2Settings}
				changeOscSettings={changeOsc2Settings}
				changeOscType={changeOsc2Type}
			/>
			<Filter />
			<ADSR />
			<Keyboard />
		</div>
	);
}

export default App;
