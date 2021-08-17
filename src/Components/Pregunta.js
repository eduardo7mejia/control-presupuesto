import React, { Fragment, useState } from "react";
import Error from "./Error";
import PropTypes from 'prop-types';

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {
  //Definir el state
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);
  //Función que lle el presupuesto
  const definirPresupuesto = (e) => {
    guardarCantidad(parseInt(e.target.value, 10));
  };
  //Submit para definir el presupuesto
  const agregarPresupuesto = (e) => {
    e.preventDefault();
    //validar
    if (cantidad < 1 || isNaN(cantidad)) {
        guardarError(true);
        return;
    }
    //Si se pasa la validación
    guardarError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    actualizarPregunta(false);
};

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      { error ? <Error mensaje="El presupuesto es incorrecto" /> : null}
      <form onSubmit={agregarPresupuesto}>
        <div className="form-group col-lg-12 col-md-6">
          <input
            type="number"
            className="form-control"
            placeholder="Coloca tu presupesto"
            onChange={definirPresupuesto}
          />
        </div>
        <div className="form-group col-lg-12 col-md-6">
          <input
            type="submit"
            className="btn btn-warning btn-block"
            value="Definir presupuesto"
            onChange={definirPresupuesto}
          />
        </div>
      </form>
    </Fragment>
  );
};

Pregunta.propTypes={
  guardarPresupuesto: PropTypes.func.isRequired,
  guardarRestante: PropTypes.func.isRequired,
  actualizarPregunta: PropTypes.func.isRequired,
}

export default Pregunta;
