import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ isAuth, onLogIn, onLogOut }) => {
    return isAuth ? (
        <button className="btn btn-primary m-2" onClick={onLogOut}>
            Выйти из системы
        </button>
    ) : (
        <button className="btn btn-primary m-2" onClick={onLogIn}>
            Войти
        </button>
    );
};

SimpleComponent.propTypes = {
    isAuth: PropTypes.string,
    onLogIn: PropTypes.func,
    onLogOut: PropTypes.func
};

export default SimpleComponent;
