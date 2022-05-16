import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./NumberSymbol.scss";
import map from "lodash";
import NumberQudarant from "./NumberQuadrant";

function NumberSymbol(props) {
    const [ones, setOnes] = useState(0);
    const [tens, setTens] = useState(0);
    const [hundreds, setHundreds] = useState(0);
    const [thousands, setThousands] = useState(0);

    useEffect(() => {
        const places = map(props.integer.toString(), char => char);
    }, [props.integer]);

    return (
        <div className={classnames(styles.root)}>
            <NumberQudarant location={10} integer={tens} />
            <NumberQudarant location={1} integer={ones} />
            <div className={styles.divider} />
            <NumberQudarant location={1000} integer={thousands} />
            <NumberQudarant location={100} integer={hundreds} />
        </div>
    );
}

NumberSymbol.propTypes = {
    integer: PropTypes.number.isRequired
}

export default NumberSymbol
