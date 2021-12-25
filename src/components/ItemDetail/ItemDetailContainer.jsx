import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail";
import { useParams } from  "react-router-dom";
import { db } from '../services/getFirebase';
import { doc, getDoc} from 'firebase/firestore';
import Cargando from "../Spinner/Spinner";


const ItemDetailContainer = () => {

    const [ producto] = useState()
    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState({})
    const { id } = useParams ();

    useEffect(() => {
        setLoading(true)
        const getProductById = async () => {
            const docRef = doc(db, "productos", id);
            const docSnap = await getDoc(docRef);
            setItem({...docSnap.data(), id: docSnap.id})
        }
        getProductById()
    }, [id, item])

    
        // useEffect(() => {
        //     setLoading(true)
        //     const dbQuery = getFirestore()
        //     const itemOne = dbQuery.collection('productos').doc(id)
        //     itemOne
        //         .get()
        //         .then(result => setProducto({ id: result.id, ...result.data() }))
        //         .catch(err => console.error(err))
        //         .finally(() => setLoading(false))
        // }, [id, setLoading])



    return (
        <>
             { loading ? <Cargando /> 
             : producto && <ItemDetail producto= {producto} initial= {1} />}
             
        </>
    )
}

export default ItemDetailContainer
