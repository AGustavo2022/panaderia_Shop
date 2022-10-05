import { useState, useEffect } from 'react'
import ItemDetail from '../itemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import {firestoreFetchOne} from '../../utils/firestoreFetch'

const ItemDetailContainer = () => {

    const [datA, setData] = useState([]);
    const { idItem } = useParams();
   
    useEffect(() => {
        firestoreFetchOne(idItem)
            .then(result => setData(result))
            .catch(err => console.log(err));        
    }, []);
    

    return (
        <>
            <ItemDetail item={datA} />
        </>
    )
}

export default ItemDetailContainer;