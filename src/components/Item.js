import * as React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import CartWidget from "./CartWidget";
import ItemCount from './ItemCount';

const Item = ({product}) => {
  return (
 <div><Card style={{ width: '18rem' }}>
 <Card.Img variant="top" src={product.imagen} />
 <Card.Body>
   <Card.Title>{product.nombre}</Card.Title>
   <ListGroupItem>{product.categoria}</ListGroupItem>
   <Card.Text>
    {product.descripcion}
   </Card.Text>
 </Card.Body>
   <ListGroupItem>{product.precio}</ListGroupItem>

 <Card.Body>
   <Card.Link>{CartWidget()}</Card.Link>
   <Card.Link>{ItemCount()}</Card.Link>
 </Card.Body>
</Card></div>
  );
}
export default Item