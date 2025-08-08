const Header = (course) => {
  return(
    <h1>{course.course}</h1>
  )
}

const Part = (part) => {
  return(
    <p>{part.part} {part.exercises}</p>
  )
}

const Content = (parts) => {
  return(
    <>
      <Part part={parts.p1} exercises={parts.ex1} />
      <Part part={parts.p2} exercises={parts.ex2} />
      <Part part={parts.p3} exercises={parts.ex3} />
    </>
  )
}

const Total = (exercises) => {
  return(
    <p>Number of exercises {exercises.ex1 + exercises.ex2 + exercises.ex3}</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content p1={part1} ex1={exercises1} p2={part2} ex2={exercises2} p3={part3} ex3={exercises3} />
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3} />
    </div>
  )
}

export default App
