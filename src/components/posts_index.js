import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindACtionCreators } from 'redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
	componentWillMount (){
		this.props.fetchPosts;
	}

	render (){
		return (
			<div>List of blog posts</div>
		)
	}
}

function mapDispatchToProps (dispatch){
	return bindACtionCreators({ fetchPosts }, dispatch);
}

export default connect(null, mapDispatchToProps)(PostsIndex);