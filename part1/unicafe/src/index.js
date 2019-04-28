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
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
};

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
);

const Statistics = ({good, neutral, bad}) => {
    const total = (good, neutral, bad) => {
        return good + neutral + bad
    };

    const average = (good, neutral, bad) => {
        // good = 1, neutral = 0, bad = -1
        if (total(good, neutral, bad) === 0) {
            return 0;
        } else {
            return (good - bad) / total(good, neutral, bad)
        }
    };

    const positives = (good, neutral, bad) => {
        if (total(good, neutral, bad) === 0) {
            return 0;
        } else {
            return good / total(good, neutral, bad)
        }
    };

    // If no votes return a different rendering
    if ( total(good, neutral, bad) === 0) {
        return (
            <div>
                <h2>Statistiikkaa</h2>
                <div>
                    <p>Ei yhtään annettua palautettua</p>
                </div>
            </div>
        )
    }

    return (
        <div>
            <h2>Statistiikka</h2>
            <div>
                <p>hyvä {good}</p>
                <p>neutraali {neutral}</p>
                <p>huono {bad}</p>
                <p>yhteensä { total(good, neutral, bad) }</p>
                <p>keskiarvo { average(good, neutral, bad) }</p>
                <p>positiivisia { positives(good, neutral, bad) }</p>
            </div>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));