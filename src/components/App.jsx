import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

require('../../src/web/peliculasStyles.css') 

import { getVideos } from '../actions/actions'
import CarrouselVideos from './CarrouselVideos'

const mapStateToProps = null;
const mapDistpatchToProps = (dispatch) => {
	return {
		onStart: () => dispatch(getVideos())
	}
}

class App extends React.Component {
	componentDidMount() {
		this.props.onStart()
	}
	
	render() {
		return (
			<div>
				<div>Hello React</div>

				<p>Prueba 3</p>

				<section className="BarraSuperior"></section>
				<CarrouselVideos />
				<section className="panelInferior"></section>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDistpatchToProps)(App)
