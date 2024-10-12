import React from 'react';

const Button = ({ increment, children }) => {
    return (
        <div>
            <button onClick={increment}>Click me</button>
            {children}
        </div>
    );
};

export default Button;
