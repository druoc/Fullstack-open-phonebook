import React from 'react';

const Input = (props) => {
    return (
        <div>
            {props.inputName}: <input 
            value={props.value}
            onChange={props.func}  />
            <br />
        </div>
    );
};

export default Input;