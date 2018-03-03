import { createAction } from 'redux-actions';

export const getVideos = createAction(
	'GET_VIDEOS', 
	() => fetch('https://demo2697834.mockable.io/movies').then(response => response.json())
)
