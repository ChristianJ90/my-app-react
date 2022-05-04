import  React from 'react';
import { Card, ListGroupItem, Button, Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";

const Item = ({id,imagen, nombre, categoria, descripcion, precio,stock}) => {

  return (
    <div className="d-flex mx-5 my-4">
      <Card style={{ width: '17rem' }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <ListGroupItem>{categoria}</ListGroupItem>
        <Card.Text>{descripcion}</Card.Text>
        <ListGroupItem>${precio}</ListGroupItem>
        {stock === 0 ? <Card.Text> <strong><span>Producto sin stock</span></strong></Card.Text>  : <div> <Card.Text>Stock: {stock}</Card.Text>        
        <Nav.Link as={Link} to={`/Detalle/${id}`}><Button className="btn btn-danger my-2" >Ver detalles</Button></Nav.Link></div>}
        </Card.Body>
      </Card>
    </div>
  )
}

export default Item