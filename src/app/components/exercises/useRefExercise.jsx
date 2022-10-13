import React, { useEffect, useRef, useState } from "react";
import CollapseWrapper from "../common/collapse";
import Divider from "../common/divider";
import prevState from "../examples/useRef/prevState";
const UseRefExercise = () => {
    const blockRef = useRef();
    const [blockState, setBlockState] = useState("Блок");
    const handleClick = () => {
        setBlockState((prevState) => (prevState === "Блок" ? "Текст" : "Блок"));
        blockRef.current.style.width = "80px";
        blockRef.current.style.height = "150px";
    };
    useEffect(() => {
        prevState.current = blockState;
    }, [blockState]);
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <Divider />
            <div
                ref={blockRef}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>{prevState ? blockState : prevState.current}</small>
            </div>
            <button className="btn btn-info mt-2" onClick={handleClick}>
                Change
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
