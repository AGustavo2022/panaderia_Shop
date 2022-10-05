import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "../cartContext/CartContext";


const CartWidget = () => {
    const {cantidadTotal} = useContext(CartContext);

    return (
        <Badge badgeContent = {cantidadTotal()} color="secondary">
            <Link to={'/cart'}><ShoppingCartIcon /></Link>
        </Badge>
    );

}

export default CartWidget;




