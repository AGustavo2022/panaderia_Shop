import { useContext} from "react";
import { CartContext } from "../cartContext/CartContext";
import { Link } from 'react-router-dom';
import {serverTimestamp, doc, setDoc, collection, updateDoc, increment } from "firebase/firestore";
import db from '../../utils/firebaseConfig';




const Cart = () => {

    const {cartlist, clear, removelItem, precioTotal} = useContext(CartContext);

    const createOrder = async () => {

        let itemforDb = cartlist.map(item => ({
            id: item.id,
            title: item.title,
            price: item.price,
            quantity: item.cantidad,
        })
        )

        let order = {
            buyer: {
                name:'leo Messi',
                email: 'leo@messi.com',
                phone: '2964586308'
            },
            date:serverTimestamp(),
            item: itemforDb,
            total:precioTotal(cartlist),
        }
        const newOrderRef = doc(collection(db,'orders'))
        await setDoc(newOrderRef, order);
        alert(`su orden se a creado con el nro ${newOrderRef.id}`)

        clear()

        itemforDb.map(async item => {
            const itemRef = doc(db, "products", item.id);  
        await updateDoc(itemRef, {
            stock: increment(-item.quantity)
        });       
        })
    }

    return (
        <>
            <div className="row">
                <Link className="col-2" to='/'><button className="btn btn-secondary ms-3">Continue Shopping</button></Link>
                <div className=" col-7"></div>
                <div className=" col-3">
                    {
                    cartlist.length >0?
                    <button onClick={clear} className=" col-5 btn btn-danger ms-5">Delete All</button>:
                    <button className=" col-8 btn btn-muted ms-5">NO hay Producto en el Carrito</button>
                    }
                </div>
                
            </div>
            <div className="row">
                <div className="col-8">
                {
                    cartlist.map(item =>
                        <>
                            <div className="row d-flex align-items-center">
                                <div className="col-2">
                                    <img src={item.pictureUrl} className="img-thumbnail" />                   
                                </div>
                                <div className="col-7 pb-2">
                                    <h3 className='pb-1 mt-5'>{item.title}</h3>
                                    <h5 className='pb-1'>Precio Ud. ${item.price}</h5>
                                    <h5 className='pb-1'>{item.description}</h5>
                                    <button onClick={() => removelItem(item.id)} className=" col-2 btn btn-danger ms-3">Delete</button>
                                </div>
                                <div className="col-3">
                                    <h5>SubTotal ${item.price*item.cantidad}</h5>
                                    <h5>Cant: {item.cantidad}</h5>
                                </div>
                                <hr />
                            </div>
                        </>
                        )
                }
                </div>
                {
                    cartlist.length >0?
                    <>                    
                        <div className="col-4 text-center">
                            <div className="card-body mt-5 p-2 border border-2 rounded bg-info">
                                <h3 className="card-title">Resumen de Compra</h3>
                                <hr />
                                <div className="text-start">
                                    <h5 className="card-text pt-3">¿Tenés un código de descuento?</h5>
                                    <h5 className="card-text pt-1 pb-3">Sub Total de la Compra ${precioTotal(cartlist)}</h5>
                                    <hr />
                                    <h5 className="card-text pt-1 pb-3">Total de la Compra ${precioTotal(cartlist)}</h5>
                                </div>
                                <hr />
                                <button onClick={createOrder} className="btn btn-primary">Generar Orden de Compra</button>
                            </div>
                        </div>
                    </>:
                    <p></p>
                }
                
            </div>
        </>
        
    )
}

export default Cart; 