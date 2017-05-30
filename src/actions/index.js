//This action creator reaches out and grabs blog posts from the api

import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=gibberish_asdf';

//This action creator reaches out and grabs blog posts from the api
export function fetchPosts(){
	//reach out to API, redux promise will unwrap the promise and pass them along to reducers which will let us access the data (via  action.payload.data)
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

	return {
		type: FETCH_POSTS,
		payload: request
	};
}