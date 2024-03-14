

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      {props.parts.map((item, index) => (
        <p key={index}>
          {item.part} {item.exercises}
        </p>
      ))}
    </>
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

  const totalExercises = parts.reduce((total, part) => total + part.exercises, 0);

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total totalExercises={totalExercises}/>
    </div>
  )
}

export default App