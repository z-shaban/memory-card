
import { Card } from "./card"
import { useState, useEffect } from "react"
export function CardBoard({currentScore, setCurrentScore, setBestScore}){
    
    const [gifs, setGif] = useState([])
    const [loading, setLoading] = useState(true)
   
    /*fetch cards from api*/
    useEffect(()=>{
      fetch('https://api.giphy.com/v1/gifs/search?q=cats&limit=10&api_key=HbgCUM3NGlo409VPr8b9Ze5PTP5Z21tr')
      .then(response => response.json())
      /*set gif in state*/
      .then(gifs => {
        const myGifs = gifs.data.map(gif => ({
            id: gif.id,
            title: gif.title,
            image: gif.images.original.url,
            alt: gif.alt_text,
            clicked: false
        }))
        setGif(shuffleCards(myGifs))
        setLoading(false)
      }
        )
    .catch(err => console.error(err));
    }, [])

   
    
    const shuffleCards = (array) => {
  return [...array].sort(()=> Math.random() - 0.5)
    }

    
   const handleClick = (gif)=>{

   if (gif.clicked == false){
   
   setCurrentScore(score => score + 1)
   /* change clicked status to true*/
   setGif(prevGif => shuffleCards(
    prevGif.map(g =>{
      if(g.id === gif.id){
        return {...g, clicked : true};
      }else{
        return g
      }
    } )
   ) 
    )
   } else if(gif.clicked === true){
    
    setBestScore(prevBestScore=> Math.max(prevBestScore, currentScore))
    /*reset current score*/
    setCurrentScore(0)
    /*reset clicked status of all cards to false*/
    setGif(prevGif => shuffleCards(
      prevGif.map(g =>({
      ...g, 
      clicked:false
    }) )
    ) 
    )
   }
    
   }

   
    

    return(
        <>
        <div className="card-Board">
            {loading ? <p>Loading...</p>: 
            gifs.map((gif)=>(
                <Card 
                onClick = {()=> handleClick(gif)}
                key={gif.id} 
                card={gif}
                />
            ))}
        </div>
        </>
    )
}