import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    const handleClick = () => {
        inputRef.current.focus();
    };
    const handleClickWidth = () => {
        inputRef.current.style.width = "100px";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">Programmable actions</SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                ref={inputRef}
                type="email"
                className="form-control mb-2"
                id="email"
            />
            <button className="btn btn-primary me-2" onClick={handleClick}>
                Focus input
            </button>
            <button
                className="btn btn-outline-info m-2"
                onClick={handleClickWidth}
            >
                Width changing
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
