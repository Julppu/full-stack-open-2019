import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = 'Half Stack -sovelluskehitys'
    const part1 = 'Reactin perusteet'
    const exercises1 = 10
    const part2 = 'Tiedonvälitys propseilla'
    const exercises2 = 7
    const part3 = 'Komponenttien tila'
    const exercises3 = 14

    const Header = (props) => {
        return (
            <h1>{props.course}</h1>
        )
    }

    const Content = (props) => {
        return (
            <p>
                {props.part} {props.exercises}
            </p>
        )
    }

    const Total = (props) => {
        return (
            <p>
                yhteensä {props.total} tehtävää
            </p>
        )
    }

    return (
        <div>
            <Header course={course} />
            <Content part={part1} excercises={exercises1} />
            <Content part={part2} excercises={exercises2} />
            <Content part={part3} excercises={exercises3} />
            <Content total={exercises1 + exercises2 + exercises3} />
            <Total  />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))