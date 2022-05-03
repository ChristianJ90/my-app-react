import  React from 'react';
import { Card, ListGroupItem, Button, Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";

const Item = ({id,imagen, nombre, categoria, descripcion, precio,stock}) => {

  return (
    <div className="mx-4">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <ListGroupItem>{categoria}</ListGroupItem>
        <Card.Text>{descripcion}</Card.Text>
        <ListGroupItem>${precio}</ListGroupItem>
        <Card.Text>Stock: {stock}</Card.Text>
        <Nav.Link as={Link} to={`/Detalle/${id}`}><Button className="btn btn-success my-2" >Ver detalles</Button></Nav.Link> 
        </Card.Body>
      </Card>
    </div>
  )
}

export default Item