
import { Card } from "./card"
import { useState, useEffect } from "react"
export function CardBoard({score , setScore}){
    
    const [gifs, setGif] = useState([])

    useEffect(()=>{
      fetch('https://api.giphy.com/v1/gifs/search?q=cats&limit=10&api_key=HbgCUM3NGlo409VPr8b9Ze5PTP5Z21tr')
      .then(response => response.json())
      /*set gif in state*/
      .then(gifs => {
        const myGifs = gifs.data.map(gif => ({
            id: gif.id,
            title: gif.title,
            image: gif.images.original.url,
            alt: gif.alt_text
        }))
        setGif(myGifs)
        
      }
        )
    .catch(err => console.error(err));
    }, [])

    const shuffleCards = (array) => {
  return [...array].sort(()=> Math.random() - 0.5)
    }

    
   const handleClick = ()=>{
    setGif(shuffleCards(gifs))
   }

   
    

    return(
        <>
        <div className="card-Board">
            {gifs.map((gif)=>(
                <Card 
                onClick = {handleClick}
                key={gif.id} 
                card={gif}
                />
            ))}
        </div>
        </>
    )
}