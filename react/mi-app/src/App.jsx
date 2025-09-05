export function App (){
   return(
        <>
        <h1>
            hola mundo
        </h1>
        <h2>
            adjaslsdalkdj
        </h2>

        </>
        

   )
}

export function Card({ title, description, color }) {
  return (
    <div style={{ border: "2px solid " + color, padding: "15px", margin: "10px", borderRadius: "8px" }}>
      <h2 style={{ color }}>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export function Div1(){
return(
    <>
      <h1>Hola mundo</h1>
      <p>Este es mi primer componente</p>
    </>

)
}