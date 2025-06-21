export function Scores({score}){

    return (
        <>
        <p>Current Score: {score.at(-1)} </p>
        <p>Best Score: {Math.max(...score)} </p>
        </>
    )
}