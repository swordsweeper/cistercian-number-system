import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./NumberQuadrant.scss";

function NumberQudarant(props) {

    return (
        <div className={classnames(styles.root, {
            [styles.ones]: props.location === 1,
            [styles.tens]: props.location === 10,
            [styles.hundreds]: props.location === 100,
            [styles.thousands]: props.location === 1000,
        })}>
            <div>
                1
            </div>
        </div>

    );
}

NumberQudarant.propTypes = {
    integer: PropTypes.number,
    location: PropTypes.number.isRequired,
}

export default NumberQudarant
