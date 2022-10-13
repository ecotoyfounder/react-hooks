import React, { useEffect, useMemo, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

function runFactorial(n) {
    console.log("run factorial");
    return factorial(n);
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [otherState, setOtherState] = useState(false);
    const buttonColor = otherState ? "primary" : "danger";
    useEffect(() => {
        console.log("render button color");
    }, [buttonColor]);

    const fact = useMemo(() => runFactorial(value), [value]);
    return (
        <>
            <CardWrapper>
                <SmallTitle>Complex calculating</SmallTitle>
                <Divider />
                <p>Value: {value}</p>
                <p>Result fact: {fact}</p>
                <button
                    className="btn btn-primary me-2"
                    onClick={() => setValue((prevState) => prevState + 10)}
                >
                    Increment
                </button>
                <button
                    className="btn btn-primary ms-md-2"
                    onClick={() => setValue((prevState) => prevState - 10)}
                >
                    Decrement
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Dependency on third party setState</SmallTitle>
                <button
                    className={"btn me-2 btn-" + buttonColor}
                    onClick={() => setOtherState((prevState) => !prevState)}
                >
                    Change color
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
