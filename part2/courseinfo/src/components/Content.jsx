import Part from "./Part";

export default function Content({ parts }) {
  const allExercises = parts.map(part => part.exercises);
  const totalExercises = allExercises.reduce((partialSum, a) => partialSum + a, 0);

  return (
    <div>
        {parts.map(part => (
            <Part key={ part.id } part={ part } />
        ))}
        <p><strong>total of {totalExercises} exercises</strong></p>
    </div>
  )
}