import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


const mapStateToProps = (state) => {
	return {
    	peliculas: state.getVideos.videos
    }
}
const mapDistpatchToProps = null;
/*const mapDistpatchToProps = (dispatch) => {
	let word = "Hola"
	return {
		//onClickButton: () => dispatch(performAction(word))
		onClickButton: () => dispatch(getChileanRegions())
	}
}*/

const CarrouselVideos = ({ peliculas }) => (
	<ul>
		{peliculas.map((pelicula, idx) => 
			<li key={idx}>{pelicula.title}</li>
		)}
	</ul>
);

CarrouselVideos.propTypes = {
	peliculas: PropTypes.arrayOf(PropTypes.object)
};

const CarrouselVideosComponent = connect(mapStateToProps, mapDistpatchToProps)(CarrouselVideos)

export default CarrouselVideosComponent
