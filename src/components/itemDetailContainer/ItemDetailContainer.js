import { useState, useEffect } from 'react'
import ItemDetail from '../itemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import {firestoreFetchOne} from '../../utils/firestoreFetch'

const ItemDetailContainer = () => {

    const [datA, setData] = useState([]);
    const { idItem } = useParams();
    const [loading, setloading] = useState(true);
   
    useEffect(() => {
        firestoreFetchOne(idItem)
            .then(result => setData(result))
            .then(result => setloading(false))
            .catch(err => console.log(err));        
    }, []);
    

    return (
        <>
        {
            loading?
            <div class="d-flex align-items-center">
                <strong>Loading...</strong>
                <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
            </div>
            :            
            <ItemDetail item={datA} />
        }
        </>
    )
}

export default ItemDetailContainer;