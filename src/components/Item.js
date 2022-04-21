import * as React from 'react';
import { Card, ListGroupItem, Button, Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";

const Item = ({products}) => {
  return (
 <div className="mx-4"><Card style={{ width: '18rem' }}>
 <Card.Img variant="top" src={products.imagen} />
 <Card.Body>
   <Card.Title>{products.nombre}</Card.Title>
   <ListGroupItem>{products.categoria}</ListGroupItem>
   <Card.Text>{products.descripcion}</Card.Text>
   <ListGroupItem>${products.precio}</ListGroupItem>
   <Card.Text>Stock: {products.stock}</Card.Text>
   <Nav.Link as={Link} to={`/Detalle/${products.id}`}><Button className="btn btn-success my-2" >Ver detalles</Button></Nav.Link> 
 </Card.Body>
</Card></div>
  );
}
export default Item