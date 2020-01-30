import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const [selected, setSelected] = useState(0);
    const votes = new Array(anecdotes.length + 1).join('0').split('').map(parseFloat);

    const setSelectedValue = (value) => setSelected(value);
    const setVoteValue = (value) => {
        votes[selected] = value;
    };

    const rand = () => {
        return Math.floor( Math.random() * anecdotes.length)
    };

    return (
        <div>
            <p>{props.anecdotes[rand()]}</p>
            <p>has {votes[selected]} votes</p>
            <Button handleClick={() => setSelectedValue(rand())} text={'next anecdote'}/>
            <Button handleClick={() => setVoteValue(votes[selected] + 1)} text={'vote'}/>
        </div>
    )
};

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
);

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
);