import { useContext, useState } from 'react';
import ItemCount from '../itemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from "../cartContext/CartContext";



const ItemDetail = ({item}) => {
    
    const [count, setCount] = useState (0); 
    const  { addItem }  = useContext(CartContext);
    
    const onAdd = (qty) => {
        alert("Usted a seleccionado " + qty + " Items.")
        setCount(qty);
        addItem(item, qty)
    }
    return (
        <>
        <div className="row d-flex align-items-center">
            <div className="col-4 text-center">
                <img src={item.pictureUrl} className="img-thumbnail" />                   
            </div>
            <div className="col-8 mt-5">
                <h1 className='pb-4'>{item.title}</h1>
                <h5 className='pb-4'>{item.description}</h5>
                <h2>${item.price}</h2>
                <h6>{item.stock} Unidades en Stock</h6>
                <div className="d-flex justify-content-end me-5">
                    {
                    count ===0?
                    <ItemCount stock={item.stock} initial={0} onAdd={onAdd} />:
                    <Link to='/cart'><button  className="btn btn-danger ms-3">IR A CARRITO</button></Link>
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default ItemDetail;