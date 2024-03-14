

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.data.part} {props.data.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part data={props.parts[0]}/>
      <Part data={props.parts[1]}/>
      <Part data={props.parts[2]}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.totalExercises}</p>
    </>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    { part: 'Fundamentals of React', exercises: 10 },
    { part: 'Using props to pass data', exercises: 7 },
    { part: 'State of a component', exercises: 14 },
  ]

  const totalExercises = parts.reduce((total, p) => total + p.exercises, 0);

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total totalExercises={totalExercises}/>
    </div>
  )
}

export default App