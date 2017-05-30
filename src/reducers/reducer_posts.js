import { FETCH_POSTS } from '../actions/index'
const INITIAL_STATE = { all: [], post: null };
//all: array of blogposts from our index route
//post: show action

export default function (state = INITIAL_STATE, action){
	switch(action.type){
		case FETCH_POSTS: 
			return { ...state, all: action.payload.data };
		default:
			return state;
	}
}

import React from 'react';