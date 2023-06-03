import {useContext} from "react";
import "./App.scss";

import Osc1 from "./components/Osc1";
import Filter from "./components/Filter";
import Keyboard from "./components/Keyboard";

import {CTX} from "./context/Store";
import ADSR from "./components/ADSR";

function App() {
	const [appState, updateState] = useContext(CTX);

	return (
		<div className="App">
			<h1>sliders</h1>
			<Osc1 />
			<Filter />
			<ADSR />
			<Keyboard />
		</div>
	);
}

export default App;
