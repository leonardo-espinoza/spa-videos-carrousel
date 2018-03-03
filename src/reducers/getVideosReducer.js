import { handleActions } from 'redux-actions'


const getVideosReducer = handleActions({
	[`GET_VIDEOS_PENDING`](state, action) { return {
		pendingRequest: true,
		successfulRequest: undefined,
		error: undefined,
		videos: state.videos
	} },
	[`GET_VIDEOS_FULFILLED`](state, action) { return {
		pendingRequest: false,
		successfulRequest: true,
		error: null,
		videos: action.payload.entries
	} },
	[`GET_VIDEOS_REJECTED`](state, action) { return {
		pendingRequest: false,
		successfulRequest: false,
		error: action.payload,
		videos: undefined
	} }
}, {
	pendingRequest: false,
	successfulRequest: true,
	error: null,
	videos: []
})

export default getVideosReducer
