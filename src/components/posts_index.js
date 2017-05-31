import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
	//dispatch an action whenever the PostsIndex component is about to be rendered/mounted on the DOM
	componentWillMount (){
		this.props.fetchPosts();
	}

	render (){
		return (
			<div>
				<div className="text-xs-right">
					<Link to="" className="">
					</Link>
				</div>
				List of blog posts
			</div>
		)
	}
}

//ES6 syntax + shortcut that replaces mapDispatchtoProps
export default connect(null, { fetchPosts })(PostsIndex);

/*
function mapDispatchToProps (dispatch){
	return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(null, mapDispatchToProps)(PostsIndex);
*/
