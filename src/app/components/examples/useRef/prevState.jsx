import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const PrevStateExample = () => {
    const prevState = useRef("true");
    const [otherState, setOtherState] = useState("false");
    const toggleOtherState = () => {
        setOtherState((prevState) =>
            prevState === "false" ? "true" : "false"
        );
    };
    useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);

    return (
        <CardWrapper>
            <SmallTitle>Previous state</SmallTitle>
            <Divider />
            <p>prev State: {prevState.current}</p>
            <p>current State: {otherState}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>
                Toggle
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
