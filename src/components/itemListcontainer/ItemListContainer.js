import Itemlist from "../itemList/ItemList";
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {firestoreFetch} from '../../utils/firestoreFetch'



const ItemListContainer = () => {

    const [data, setData] = useState([]);
    const { idCategory } = useParams();
    const [loading, setloading] = useState(true);
 
    useEffect(() => {
        firestoreFetch(idCategory)
            .then(result => setData(result))
            .then(result => setloading(false))
            .catch(err => console.log(err))
    }, [idCategory]);

    const onAdd = (qty) => {
        alert("Usted a seleccionado " + qty + " Items.")
    }

    return (
        <>
        {
            loading?
            <div class="d-flex align-items-center">
                <strong>Loading...</strong>
                <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
            </div>
            :<Itemlist items={data}/>
        }
        </>
    )
}

export default ItemListContainer;