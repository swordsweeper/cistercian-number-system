import React, { useRef, useState, useEffect } from "react";
import styles from "./Home.scss";
import NumberSymbol from "./NumberSymbol";
const IMAGE_SRC = require('../img/Cistercian_Number_System.jpg');
function Home(props) {

    const [currentNumber, setCurrentNumber] = useState();
    const numberInput = useRef();

    const updateNumberValue = (changes) => {
        console.log(changes);

        //setCurrentNumber();
    }

    return (
        <div className={styles.root}>
            <div className={styles.inputBox}>
                <input
                    type="number"
                    max={9999}
                    ref={numberInput}
                    value={currentNumber}
                    placeholder={"Enter a value 1-9999"}
                    onChange={updateNumberValue}
                />
            </div>
            <NumberSymbol integer={currentNumber} />
            <div>
                <img src={IMAGE_SRC} />
            </div>

        </div>

    );
}

export default Home
