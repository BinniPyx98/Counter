import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import SetCounter from "./components/Counter/SetCounter";

export type CountType = number

function App() {
    useEffect(() => {

        let stringValue = localStorage.getItem('counterValue')
        console.log(stringValue)
        if (stringValue) {
            let newValue = JSON.parse(stringValue)
            setCount(newValue)
        }
    }, [])

    let [ShowSetCounter, SetShowSetCounter] = useState(false) //Если true, то показывается SetCounter, а Counter скрывается
    let [count, setCount] = useState<number>(0)
    let [max, setMax] = useState<number>(5)
    let [min, setMin] = useState<number>(0)
    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(count))
    }, [count])


    const inc = () => {

        let newCount=count+1
        count < max && count > min && setCount(newCount)

    }
    const reset = () => {

        count > 0 && setCount(count - 1)
        count === 5 && setCount(0)

    }
    const set = () => {
        ShowSetCounter ? SetShowSetCounter(false) : SetShowSetCounter(true)

    }

    const dispatch = (action: string) => {
        if (action === "inc") {
            inc()
        }
        if (action === "reset") {
            reset()
        }
        if (action === "set") {
            set()
        }
        if (action === "set-value") {
            let show = !ShowSetCounter
            SetShowSetCounter(show)
        }
    }

    let onChangeInput = (value: number, title: string) => {
        console.log(title)
        if (title === 'max'){
            setMax(value)}
        if (title === 'min'){
            setMin(value)}
    }


    return (
        <div className="App">
            {!ShowSetCounter && <Counter count={count} setCount={setCount} dispatch={dispatch}/>}
            {ShowSetCounter && <SetCounter dispatch={dispatch} max={max} min={min} onChangeInput={onChangeInput}/>}
        </div>
    );
}

export default App;
