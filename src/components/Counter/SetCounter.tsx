import React, {ChangeEvent, useState} from 'react';
import SetCounterCss from "./SetCounter.module.css"
import Button from "../Button/Button";

type PropsType = {
    dispatch: (action: string) => void
    max: number
    min: number
    onChangeInput: (value: number, title: string) => void
}

const SetCounter: React.FC<PropsType> = (props) => {


    let onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>, title: string) => {
        let newValue = parseInt(e.currentTarget.value)
        props.onChangeInput(newValue, 'max')
    }
    let onChangeHandlerMin = (e: ChangeEvent<HTMLInputElement>, title: string) => {
        let newValue = parseInt(e.currentTarget.value)
        props.onChangeInput(newValue, 'min')
    }

    return (

        <div className={SetCounterCss.setCounterArea}>

            <div className={SetCounterCss.settingsArea}>
                <div><label htmlFor="">max value: <input type="text" onChange={(e) => onChangeHandlerMax(e, "max")}
                                                         value={props.max}/></label></div>
                <div><label htmlFor="">start value: <input type="text" onChange={(e) => onChangeHandlerMin(e, "min")}
                                                           value={props.min}/></label></div>
            </div>

            <div className={SetCounterCss.buttonArea}>
                <div className={SetCounterCss.setButton}>
                    <Button title={"set"} onClick={() => props.dispatch('set-value')}/>
                </div>
            </div>


        </div>

    );
};

export default SetCounter;