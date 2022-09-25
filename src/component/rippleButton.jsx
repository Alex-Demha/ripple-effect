import React from 'react';

import './styles/styles.css';

const RippleButton = () => {
    return ( 
        <div className='container'>
            <div className='ripple-button-border'>
            <button className="ripple-button">Press Me</button>
            </div>
        </div>
     );
}
 
export default RippleButton;