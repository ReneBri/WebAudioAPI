import React, {useReducer} from "react";

import Osc from "../utility/Osc";

let actx = new AudioContext();
let out = actx.destination;

let gain1 = actx.createGain();
gain1.gain.value = 0.5;
let filter = actx.createBiquadFilter();

gain1.connect(filter);
filter.connect(out);

const CTX = React.createContext();

export {CTX};

let nodes = [];

export const reducer = (state, action) => {
	let {id, value, note, freq} = action.payload || {};
	switch (action.type) {
		case "MAKE_OSC":
			const newOsc = new Osc(
				actx,
				state.osc1Settings.type,
				freq,
				state.osc1Settings.detune,
				state.envelopeSettings,
				gain1
			);
			nodes.push(newOsc);
			return {...state};
		case "KILL_OSC":
			let newNodes = [];
			nodes.forEach((node) => {
				if (Math.round(node.osc.frequency.value) === Math.round(freq)) {
					node.stop();
				} else {
					newNodes.push(node);
				}
			});
			nodes = newNodes;
			return {...state};
		case "CHANGE_OSC1":
			return {
				...state,
				osc1Settings: {...state.osc1Settings, [action.payload.id]: action.payload.value},
			};
		case "CHANGE_OSC1_TYPE":
			return {...state, osc1Settings: {...state.osc1Settings, type: action.payload}};
		case "CHANGE_FILTER_SETTINGS":
			filter[action.payload.id].value = action.payload.value;
			return {
				...state,
				filterSettings: {
					...state.filterSettings,
					[action.payload.id]: action.payload.value,
				},
			};
		case "CHANGE_FILTER_TYPE":
			filter.type = action.payload;
			return {...state, filterSettings: {...state.filterSettings, type: action.payload}};
		case "CHANGE_ENVELOPE_SETTINGS":
			return {...state, envelopeSettings: {...state.envelopeSettings, [id]: +value}};
		default:
			return state;
	}
};

export default function Store(props) {
	const stateHook = useReducer(reducer, {
		osc1Settings: {
			detune: 0,
			type: "sine",
		},
		filterSettings: {
			frequency: filter.frequency.value,
			detune: filter.detune.value,
			Q: filter.Q.value,
			gain: filter.gain.value,
			type: filter.type,
		},
		envelopeSettings: {
			attack: 0.005,
			decay: 0.1,
			sustain: 0.6,
			release: 0.1,
		},
	});
	return <CTX.Provider value={stateHook}>{props.children}</CTX.Provider>;
}
