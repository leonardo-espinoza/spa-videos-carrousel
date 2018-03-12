import { createAction } from 'redux-actions'
//import Config from '../../config.json'

export const getVideos = createAction(
	'GET_VIDEOS', 
	() => fetch(Config.peliculasSource.url).then(response => response.json())
//	() => fetch('https://demo2697834.mockable.io/movies').then(response => response.json())
//	() => fetch('https://www.google.cl').then(response => response.json())
//	() => fetch('https://noexisto.cl').then(response => response.json()) //.catch(e => e) // No poner catch, porque sino, no resultará en GET_VIDEOS_REJECTED
)
