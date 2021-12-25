import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from  "react-router-dom";
import Cargando from '../Spinner/Spinner'
import Item from '../Item/Item'
import './ItemList.css'
import {getFirestore} from 'firebase/firestore';
// import {Carousel} from "react-boostrap";
import { Link } from "react-router-dom"

function ItemList () { 
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategoria } = useParams ()


    useEffect(() => {

        const dbQuery = getFirestore()
        const nuevaColeccion = idCategoria ?
                                    dbQuery.collection("productos").where("categoria", "==", idCategoria)
                                    :
                                    dbQuery.collection("productos")

        nuevaColeccion.get()
        .then(resp => {
            setProductos (resp.docs.map(producto => ({id : producto.id, ...producto.data() }  ) ) )
        })
        .catch(err =>console.log(err))
        .finally(()=> setLoading(false))

    }, [idCategoria, setLoading])


    
    return (
        <>             
            { loading ? <Cargando /> : 
            <>
           

          <div id= "nosotros"> 
              <h2>Sobre Nosotros</h2>
              <p>LujanHardware surge debido a la necesidad de armar una PC Gamer con un determinado presupuesto. Dado que MercadoLibre posee una comision por venta por cada publicación, las casas de venta de hardware se ven obligadas a incrementar el precio de los productos, lo que termina perjudicando al comprador.
Por ende, y con el objetivo de encontrar el mejor precio, se consultaba de forma manual diferentes páginas buscando así el mejor precio para cada uno de los componentes que se necesitaban para el ensamblado de nuestra PC.
Esto resultaba bastante tedioso ya que diariamente se publicaban productos nuevos en cada una de las páginas y en otras se actualizaba el precio. De esta forma surgió la idea de realizar un buscador de hardware que integre la mayor cantidad de tiendas que posean venta de hardware de manera online.
              </p>
          
          </div> 
          
          
          <div id= "conjuntoIconos">
           
            <div>
                <Link to="/">
                    <img src=" https://png.clipart.me/previews/ebd/outlined-black-white-desktop-pc-29059.png" alt= "imagen icono 1"
                    style= {{width: "80px", margin: "1rem"}} className="hvr-grow"/>
                    <p className= "categoriaIconos">Pc completa</p>
                </Link>
                </div>
                <div>
                <Link to="/categoria/botellas">
                    <img src=" https://image.freepik.com/vector-gratis/pantalla-computadora-desktop-pc-tecnologia-icon-vector-concept_53876-34740.jpg" alt= "imagen icono 2"
                    style= {{width: "80px", margin: "1rem"}}  className="hvr-grow"/>
                    <p className= "categoriaIconos">Monitores</p>
                </Link>
                </div>
                <div>
                <Link to="/categoria/latas">
                    <img src="https://thumbs.dreamstime.com/b/icono-plano-del-esquema-de-escritorio-la-caja-torre-pc-123517528.jpg" alt= "imagen icono 3"
                    style= {{width: "80px", margin: "1rem"}}  className="hvr-grow"/>
                    <p className= "categoriaIconos">Gabinetes</p>
                </Link>
                </div>
                <div>
                <Link to="/categoria/saborizadas">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz1M5MIOE8hgJ8wvhDZx1p4nTwVD5A_CR3QEoBnpZB26_iUksCPPft4-ZYNGL7OA3QS28&usqp=CAU" alt= "imagen icono 4"
                    style= {{width: "80px", margin: "1rem"}}  className="hvr-grow"/>
                    <p className= "categoriaIconos">Accesorios</p>
                </Link>
                </div>
            </div>

            <div className="conjuntoCards">
            {productos.map((producto) => <Item {...producto}/>)}
           
        </div> 
        
        </>
        }  
    </>
    )
}

export default ItemList
