import React from 'react';

const Person = (props) => {
    return (
        <div>
            <p>{props.personName} - {props.personNumber}</p>
            
        </div>
    );
};

export default Person;