import React, {useContext, useEffect} from "react";
import {CTX} from "../context/Store";

import QwertyHancock from "qwerty-hancock";

const Keyboard = () => {
	const [appState, updateState] = useContext(CTX);

	useEffect(() => {
		const keyboard = new QwertyHancock({
			id: "keyboard",
			width: "450",
			height: "70",
			octaves: "4",
			startNote: "c3",
			whiteKeyColour: "rgb(28, 198, 186)",
			blackKeyColor: "rgb(18, 70, 67)",
			activeColour: "rgb(146, 49, 172)",
			borderColor: "white",
		});
		keyboard.keyDown = (note, freq) => {
			updateState({type: "MAKE_OSC", payload: {note, freq}});
		};
		keyboard.keyUp = (note, freq) => {
			updateState({type: "KILL_OSC", payload: {note, freq}});
		};
	}, [updateState]);

	return (
		<div>
			<div id="keyboard"></div>
		</div>
	);
};

export default Keyboard;
