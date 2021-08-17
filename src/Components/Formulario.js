import React, { useState} from "react";
import Error from "./Error";
import shortid from "shortid";
import PropTypes from 'prop-types';

const Formulario = ({guardarGasto, guardarCrearGasto}) => {
    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);
    //Cuando el usuario agrega un gasto
    const agregarGasto = e => {
        e.preventDefault();
        //validar 
        if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
            guardarError(true);
            return;
        }
        //Construir el gasto
        const gasto = {
            nombre, cantidad, id: shortid.generate()
        }
        //Pasar el gasto al componente principal
        guardarGasto(gasto)
        guardarCrearGasto(gasto)
        //Resetear el form
        guardarNombre('');
        guardarCantidad(0);
    }
  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aquí</h2>
      {error ? <Error mensaje="Ambos campos son obligatorios o el presupuesto es incorrecto"/> : null }
      <div className="form-group col-lg-12 col-md-6">
        <label>Nombre del gasto:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange= {e=> guardarNombre(e.target.value)}
        />
      </div>
      <div className="form-group col-lg-12 col-md-6">
        <label>Cantidad del gasto:</label>
        <input
          type="number"
          className="form-control"
          placeholder="Ej. 500"
          value={cantidad}
          onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
        />
      </div>
      <div className="form-group col-lg-12 col-md-6">
          <input
            type="submit"
            className="btn btn-warning btn-block"
            value="Agregar gasto"
          />
        </div>
    </form>
  );
};

Formulario.propTypes={
  guardarGasto: PropTypes.func.isRequired,
  guardarCrearGasto: PropTypes.func.isRequired
}

export default Formulario;
