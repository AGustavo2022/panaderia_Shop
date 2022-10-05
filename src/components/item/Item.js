import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Item = ({id, title, description, price, pictureUrl, stock}) => {
  return (

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="340"
        image={pictureUrl}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">{title}</Typography>
        <Typography variant="body2" color="text.secondary">{description}</Typography>
        <Typography variant="body2" color="text.secondary">Precio ${price}</Typography>
        <Typography variant="body2" color="text.secondary">Stock: {stock}</Typography>
      </CardContent>
      <CardActions>
        <Link to={`/item/${id}`}><Button size="small">VER DETALLES DEL PRODUCTO</Button></Link>
      </CardActions>
    </Card>

  );
}

export default Item;
