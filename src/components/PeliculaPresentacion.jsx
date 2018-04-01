import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


const putImageUrl = (data) => {
	if ((typeof data.images === 'undefined') ||
		(!Array.isArray(data.images)) ||
		(data.images.length == 0) ||
		(typeof data.images[0].url === 'undefined') ||
		(data.images[0].url == '')
	   ) return undefined;
	return 'url(' + data.images[0].url + ')'
}



const mapStateToProps = (state, ownProps) => {
	return ownProps
}
const mapDistpatchToProps = null;
/*const mapDistpatchToProps = (dispatch, ownProps) => {
	let word = "Hola"
	return {
		//onClickButton: () => dispatch(performAction(word))
		onClickButton: () => dispatch(getChileanRegions())
	}
}*/

const PeliculaPresentacion = (props) => (
	<div className="video" 
		 key={props.key} 
		 style={{ 
		 	backgroundImage: putImageUrl(props.data) 
		 }}>
		<div className="videoTitle">{props.data.title}</div>
	</div>
)

PeliculaPresentacion.propTypes = {
//	procesamiento: PropTypes.object,
//	peliculas: PropTypes.arrayOf(PropTypes.object)
};

export default connect(mapStateToProps, mapDistpatchToProps)(PeliculaPresentacion)
