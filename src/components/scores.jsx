export function Scores({currentScore, bestScore}){
    
    return (
        <>
        <p>Current Score: {currentScore} </p>
        <p>Best Score: {bestScore} </p>
       {bestScore === 10 &&
         <p className="winStatement">YOU WINN!!! </p>
       }
        </>
    )
}