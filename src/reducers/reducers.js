import { combineReducers } from 'redux'
//import { PERFORM_ACTION } from '../actions/actions'


function nullReducer(state, action) { 
	if (typeof state === "undefined") {
		//return { myReducer: [] }
		return []
	}

	return state; 
}

/*
function myReducer(state, action) {
	if (typeof state === "undefined") {
		//return { myReducer: [] }
		return []
	}

	switch (action.type) {
	case PERFORM_ACTION:
		//return Object.assign({}, state, { myReducer: state.myReducer.concat([action.param]) });
		return state.concat([action.param])
	case 'GET_CHILEAN_REGIONS_PENDING':
		return state;
	case 'GET_CHILEAN_REGIONS_FULFILLED':
		return state.concat(action.payload.map(region => region.nombre + '( lat: ' + region.lat + ', lng: ' + region.lng + ' )'));
	case 'GET_CHILEAN_REGIONS_REJECTED':
		return state;
	default:
		return state;
	}
}

function asyncStates(state, action) {
	if (typeof state === "undefined") {
		//return { myReducer: [] }
		return {}
	}

	switch (action.type) {
	case 'GET_CHILEAN_REGIONS_PENDING':
		return { isPending: true, isOk: undefined, errorMsg: undefined };
	case 'GET_CHILEAN_REGIONS_FULFILLED':
		return { isPending: false, isOk: true, errorMsg: undefined };
	case 'GET_CHILEAN_REGIONS_REJECTED':
		return { isPending: false, isOk: false, errorMsg: "Error al cargar Regiones" };
	default:
		return state;
	}
}
*/


const rootReducer = combineReducers({
  nullReducer: nullReducer
})

export default rootReducer;
