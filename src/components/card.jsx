export function Card({card}){
return <>
  <div className="card" style={{border: '2px black solid'}}>
    <div className="card-image"> <img src={card.image} alt={card.alt_text} /> </div>
    <p className="card-name">{card.title} </p>
  </div>
</>

}