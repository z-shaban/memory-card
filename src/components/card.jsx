export function Card({card, onClick}){
return <>
  <div className="card" style={{border: '2px black solid'}} onClick={onClick}>
    <div className="card-image"> <img src={card.image} alt={card.alt_text} /> </div>
    <p className="card-name">{card.title} </p>
  </div>
</>

}