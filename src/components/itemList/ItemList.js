import Item from '../item/Item';


const Itemlist = ({ items }) => {
  
    return (
        <div className='d-flex flex-wrap gap-5'>
        {
          items.length > 0 ? 
          items.map(item =>            
            <Item
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                stock={item.stock}
                pictureUrl={item.pictureUrl}
            /> 
          )
          : <p>Cargando datos....</p>
        }
        </div>

    );
}

export default Itemlist;