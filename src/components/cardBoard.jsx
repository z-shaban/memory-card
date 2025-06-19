import { Card } from "./card"
export function CardBoard(){
    const mockData = [
        {name: "alfa", img:"alfa.jpg"},
        {name: "fareeda", img:"fareeda.jpg"},
        {name: "fareed", img:"fareed.jpg"},
        {name: "ihsaan", img:"ihsaan.jpg"},
        {name: "aliyah", img:"aliyah.jpg"},
        {name: "adiza", img:"adiza.jpg"}
    ]

    return(
        <>
        <div className="card-Board">
            {mockData.map((data, index)=>(
                <Card key={index} card={data}/>
            ))}
        </div>
        </>
    )
}