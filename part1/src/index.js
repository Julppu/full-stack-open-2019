import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = 'Half Stack -sovelluskehitys';
    const part1 = {
        name: 'Reactin perusteet',
        exercises: 10
    };
    const part2 = {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
    };
    const part3 = {
        name: 'Komponenttien tila',
        exercises: 14
    };

    const Header = (props) => {
        return (
            <h1>{props.course}</h1>
        )
    };

    const Part = (props) => {
        return (
            <p>{props.part.name} {props.part.exercises}</p>
        )
    };

    const Content = (props) => {
        return (
            <div>
                <Part part={props.part1} />
                <Part part={props.part2} />
                <Part part={props.part3} />
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
            <Content part1={part1} part2={part2} part3={part3} />
            <Total total={part1.exercises + part2.exercises + part3.exercises} />
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));