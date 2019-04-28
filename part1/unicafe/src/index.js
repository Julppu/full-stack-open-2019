import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const [ good, setGood ] = useState(0);
    const [ neutral, setNeutral ] = useState(0);
    const [ bad, setBad ] = useState(0);

    const setGoodValue = (value) => setGood(value);
    const setNeutralValue = (value) => setNeutral(value);
    const setBadValue = (value) => setBad(value);

    return (
        <div>
            <h2>Anna palautetta</h2>
            <Button handleClick={() => setGoodValue(good + 1)} text='hyvä'/>
            <Button handleClick={() => setNeutralValue(neutral + 1)} text='neutraali'/>
            <Button handleClick={() => setBadValue(bad + 1)} text='huono'/>
            <Stats good={good} neutral={neutral} bad={bad}/>
        </div>
    )
};

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
);

const Stats = ({good, neutral, bad}) => {
    return (
        <div>
            <h2>Statistiikka</h2>
            <div>
                <p>hyvä {good}</p>
                <p>neutraali {neutral}</p>
                <p>huono {bad}</p>
            </div>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));