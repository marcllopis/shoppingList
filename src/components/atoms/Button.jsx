import React, { Component } from 'react';

// import styled, { css } from 'styled-components';


const Button = (props) => (
    <button onClick={() => props.action(props.item, props.place)}>
        {props.text}
    </button>
);




export default Button;




