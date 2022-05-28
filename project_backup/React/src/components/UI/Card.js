import React from 'react';
import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>{props.children}</div>
        //to props.children mas epistrepei na dimiourgoume wrapper components
    )
}

export default Card;