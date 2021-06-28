import React, {useState} from 'react';
import Button from "../Button/Button";
import CounterCss from "./Counter.module.css"
import {CountType} from "../../App";
import SetCounter from "./SetCounter";

type PropsTypeCounter = {
    count: CountType
    setCount: (value: CountType) => void
    dispatch: (action: string) => void
    }


const Counter: React.FC<PropsTypeCounter> = ({count, setCount, dispatch,}) => {


    return (

        <div
            className={CounterCss.counterArea }>
            <div className={CounterCss.countArea + ' ' + (count === 5 ? CounterCss.error : '')}>
                {count}
            </div>
            <div className={CounterCss.buttonArea}>
                <Button title="inc" disabled={count === 5} onClick={() => dispatch('inc')}/>
                <Button title="reset" disabled={count === 0} onClick={() => dispatch('reset')}/>
                <Button title="set" onClick={() => dispatch('set')}/>
            </div>
        </div>


    );
};

export default Counter;