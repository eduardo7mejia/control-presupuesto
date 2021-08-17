import React, {Fragment} from 'react';
import {revisarPresupuesto} from '../helpers';
import PropTypes from 'prop-types';

const ControlPresupuesto = ({presupuesto, restante}) => {
    return ( <Fragment>
        <div className="form-group col-lg-12 col-md-6">
            <div className="alert alert-primary">
                Prespuesto: ${presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante: ${restante}
            </div>
        </div>
    </Fragment> );
}

ControlPresupuesto.propTypes={
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
  }

export default ControlPresupuesto;