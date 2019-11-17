import React from "react";

function Result(props) {
    return (
        <div>
            <p>{props.title}</p>
            <p><strong>{props.author}</strong></p>
            <p>{props.description}</p>
            <img alt="" src={props.img}></img>
        </div>
    )
}
export default Result;