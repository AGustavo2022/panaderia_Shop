import {createContext, useState} from 'react';

export const CartContext = createContext ();

const CartContextProvider = ({children}) => {

    const [cartlist, setcartList] = useState ([])

    const addItem = (product, qty) => {
        const flag = cartlist.find(item => item.id === product.id)
        if (flag === undefined){
            product['cantidad'] = qty;
            product['priceItem'] = product.price*product.cantidad;
            setcartList([...cartlist,product]);
        }else{
            product['cantidad'] += qty;
            product['priceItem'] = product.price*product.cantidad;
            setcartList([...cartlist])
        }
    }

    const removelItem = (itemId) => {
        setcartList(cartlist.filter(item => item.id !== itemId))
    }

    const clear = () => {
        setcartList([])
    }

    const precioTotal = (cartlist) => {
        const mapcartlist = cartlist.map(item => item.priceItem);
        const result = mapcartlist.indexOf(mapcartlist[0]);
        if (result >= 0){
            return Math.round(mapcartlist.reduce((a, b) => a + b));
        }else{
            return 0;
        }
        
    }

    const cantidadTotal = () => {
        const mapcartlist = cartlist.map(item => item.cantidad)
        const result = mapcartlist.indexOf(mapcartlist[0]);
        if (result >=0){
            return mapcartlist.reduce((a, b) => a + b);
        }else{
            return;
        }
               
    }

    return (
        <CartContext.Provider value={{cartlist, addItem, clear, removelItem, precioTotal, cantidadTotal}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;