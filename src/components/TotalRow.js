import React from 'react';
import { format } from '../util/util';

const TotalRow = ({ total }) => (
  <div className='total-row-body'>
    <div>
      <span className='total-row-label'>Total:</span>
      <span className='total-row-value'>{ format(total) }</span>
    </div>
  </div>
);

TotalRow.propTypes = {
  total: React.PropTypes.number.isRequired
};

export default TotalRow;