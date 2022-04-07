import * as React from 'react';
import { Card, ListGroupItem, Button, Nav} from 'react-bootstrap';
import ItemCount from './ItemCount';
import { Link } from "react-router-dom";

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
   <Nav.Link as={Link} to="/Detalle"><Button className="btn btn-success my-2" >Ver detalles</Button></Nav.Link> 
   <Card.Link>{ItemCount()}</Card.Link>
 </Card.Body>
</Card></div>
  );
}
export default Item