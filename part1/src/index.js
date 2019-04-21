import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = 'Half Stack -sovelluskehitys';
    const part1 = 'Reactin perusteet';
    const exercises1 = 10;
    const part2 = 'Tiedonvälitys propseilla';
    const exercises2 = 7;
    const part3 = 'Komponenttien tila';
    const exercises3 = 14;

    const Header = (props) => {
        return (
            <h1>{props.course}</h1>
        )
    };

    const Part = (props) => {
        return (
            <p>{props.part} {props.excercise}</p>
        )
    };

    const Content = (props) => {
        return (
            <div>
                <Part parts={props.part} excercises={props.excercises}/>
                <Part parts={props.part} excercises={props.excercises}/>
                <Part parts={props.part} excercises={props.excercises}/>
            </div>
        )
    };

    const Total = (props) => {
        return (
            <p>
                yhteensä {props.total} tehtävää
            </p>
        )
    };

    return (
        <div>
            <Header course={course} />
            <Content parts={parts} excercises={exercises} />
            <Total total={exercises1 + exercises2 + exercises3} />
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'))