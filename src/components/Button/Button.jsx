import React, { Children } from 'react';
import './Button.css'

const Button = ({children}) => {
    // console.log(props);
    // const {children} =props;
    return (
        <div className='button'>
            <button className="btn btn-active btn-accent">{children}</button>
        </div>
    );
};

export default Button;