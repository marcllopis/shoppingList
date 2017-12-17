

import React from 'react';

const Form = (props) => (
    <div className="">
        <input
            type="text"
            placeholder="Add new Item"
            value={props.item}
            onChange={(event) => props.getItem(event.target.value)}
        />
    </div>
);

export default Form