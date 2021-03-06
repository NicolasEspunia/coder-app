import "./ItemDetail.css"
import {  useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
// import Button from 'reactstrap/Button'
import { Link } from 'react-router-dom'
import { useCartContext } from "../Context/cartContex"



function ItemDetail( {producto={}} ) {
  
    const [cambiarBoton, setCambiarBoton] = useState(true)
    const { addToCart} = useCartContext ()


    const onAdd = (count) =>{
        setCambiarBoton (false)
        addToCart ({producto: producto, quantity:count})
    }



    return (
        <div className = "itemDetail">
        <div className ="contenedorCard">  
        <div className="cardImagen">
                 <img  src={producto.pictureUrl} className="cardImg" alt= "imagen producto" />
            </div>
        <div className='cardDetalle'>
        <h1>{producto.title}</h1>
         <p>{producto.description}</p>
         <hr />
            
            <div className="cardBody">
                <h3>Caracteristicas</h3>
                <p>{producto.ingredientes}</p>
            
                <div className= "cardFooter">

                    

                <label className="precioProducto">${producto.price}</label>
                { cambiarBoton ?
        
                <ItemCount stock={producto.stock} initial={1} onAdd = {onAdd} />
                :
                <div>
                    <Link to= {"/cart"}>
                        <button className= "botonContador">Ir a pagar</button>
                    </Link>
                    
                    <Link to= {"/"}>
                        <button className= "botonContador">Seguir comprando</button>
                    </Link>
                </div>
             }
            </div>
            </div>   
        </div>
        </div>
        </div>
    )
}

export default ItemDetail