import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const mapStateToProps = (state) => {
	return {
		procesamiento: {
			enProceso: state.getVideos.pendingRequest,
			ultimoProcesoOk: state.getVideos.successfulRequest,
			ultimoProcesoError: state.getVideos.error
		},
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

const CarrouselVideos = ({ procesamiento: { enProceso, ultimoProcesoOk, ultimoProcesoError }, peliculas }) => {
	if (enProceso) return (
		<p>En Proceso</p>
	) 
	if (ultimoProcesoOk) {
		if ((typeof peliculas == "undefined") || (peliculas === null) || !Array.isArray(peliculas) || (peliculas.length == 0)) return (
			<p>No se encontraron peliculas.</p>
		)
		return (
		<div className="carrousel">
			{peliculas.map((pelicula, idx) => 
				<div className="video" key={idx}>{pelicula.title}</div>
			)}
		</div>
		)
	}
	console.log({
		title: "Error conexion servidor peliculas.", 
		error: ultimoProcesoError,
		merr: ultimoProcesoError.message
	})
	return (
		<p>Error al traer peliculas desde servidor.</p>
	)
};

CarrouselVideos.propTypes = {
	procesamiento: PropTypes.object,
	peliculas: PropTypes.arrayOf(PropTypes.object)
};

export default connect(mapStateToProps, mapDistpatchToProps)(CarrouselVideos)
