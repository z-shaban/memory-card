
import { Card } from "./card"
import { useState, useEffect } from "react"
export function CardBoard(){
    /*const mockData = [
        {name: "alfa", img:"alfa.jpg"},
        {name: "fareeda", img:"fareeda.jpg"},
        {name: "fareed", img:"fareed.jpg"},
        {name: "ihsaan", img:"ihsaan.jpg"},
        {name: "aliyah", img:"aliyah.jpg"},
        {name: "adiza", img:"adiza.jpg"}
    ]*/

    const [gifs, setGif] = useState([])

    useEffect(()=>{
      fetch('https://api.giphy.com/v1/gifs/search?q=dogs&limit=10&api_key=HbgCUM3NGlo409VPr8b9Ze5PTP5Z21tr')
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
    }, [])

   
    

    return(
        <>
        <div className="card-Board">
            {gifs.map((gif)=>(
                <Card key={gif.id} card={gif}/>
            ))}
        </div>
        </>
    )
}