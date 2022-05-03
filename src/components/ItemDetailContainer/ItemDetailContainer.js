import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { Container, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useProductDetail from '../../hooks/useProductDetail';

const ItemDetailContainer = () => {

  const {itemId} = useParams()
  const {productDetail, loading} = useProductDetail(itemId)

  return (
    <Container>       
      {loading ? <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>     
        </Spinner> : <ItemDetail { ...productDetail}/>
      }      
    </Container>
  )
}

export default ItemDetailContainer
