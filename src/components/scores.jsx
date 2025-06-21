export function Scores({score}){
    const bestScore = Math.max(...score)
    return (
        <>
        <p>Current Score: {score.at(-1)} </p>
        <p>Best Score: {bestScore} </p>
       {bestScore === 10 &&
         <p className="winStatement">YOU WINN!!! </p>
       }
        </>
    )
}