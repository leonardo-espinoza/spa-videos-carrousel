import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

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
	<div className="video" key={props.key}>{props.data.title}</div>
)

PeliculaPresentacion.propTypes = {
//	procesamiento: PropTypes.object,
//	peliculas: PropTypes.arrayOf(PropTypes.object)
};

export default connect(mapStateToProps, mapDistpatchToProps)(PeliculaPresentacion)
