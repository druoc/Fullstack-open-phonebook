import React from 'react';

const Filter = (props) => {
    return (
        <input type="text" onChange={props.func} placeholder="Filter results..."/ >
    );
};

export default Filter;