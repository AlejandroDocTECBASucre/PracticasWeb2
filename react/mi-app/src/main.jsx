import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App,Div1,Card} from './App.jsx'
import { Cart2 } from './components/navar.jsx'
import './components/Card.css' 



createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <div>
      <Card 
        title="Componente 1 adssadhaskjdhakhdajkshd" 
        description="Este es el primer componente con props" 
        color="black" 
      />
      <Card 
        title="Componente 2" 
        description="Otro componente con parámetros diferentes" 
        color="blue" 
      />
      <Card 
        title="Componente 3" 
        description="Mismo componente, distinta data" 
        color="red" 
      />
    </div>
  </StrictMode>,
)
