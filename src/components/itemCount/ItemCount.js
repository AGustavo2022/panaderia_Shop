import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';



const ItemCount = ({stock , initial, onAdd} ) => {

    const [rate, setRate] = useState(initial);
    
    const handleClickAumentar = () => {
        (rate < stock)?setRate(rate+1):alert("Alcanzaste el número máximo de unidades")
    }
    const handleClickDisminuir = () => {
        (rate >= 1)?setRate(rate-1):alert("Debes comprar al menos x unidades");
        }
    
    return (
        <>
        <AddIcon className="me-1" onClick={handleClickAumentar}/> {rate} <HorizontalRuleIcon className="ms-1" onClick={handleClickDisminuir}/>
        
        {
        rate>0 && stock>0?
        <button  onClick={()=>{onAdd(rate)}} className="btn btn-primary ms-3">ADD TO CART</button>:
        <button  className="btn btn-secondary ms-3" disabled>ADD TO CART</button>
        }
        
        </>
    )
    
}


export default ItemCount;
