import Itemlist from "../itemList/ItemList";
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {firestoreFetch} from '../../utils/firestoreFetch'



const ItemListContainer = () => {

    const [data, setData] = useState([]);
    const { idCategory } = useParams();
 
    useEffect(() => {
        firestoreFetch(idCategory)
            .then(result => setData(result))
            .catch(err => console.log(err));
    }, [idCategory]);


    const onAdd = (qty) => {
        alert("Usted a seleccionado " + qty + " Items.")
    }

    return (
        <>
        <Itemlist items={data}/>
        </>
    )
}

export default ItemListContainer;