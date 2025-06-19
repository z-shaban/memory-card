export function Card({card}){
return <>
  <div className="card" style={{border: '2px black solid'}}>
    <div className="card-image">{card.img} </div>
    <p className="card-name">{card.name} </p>
  </div>
</>

}