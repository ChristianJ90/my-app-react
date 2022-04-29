import React, {useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { Container, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import db from '../firebase/config'
import { doc, getDoc } from 'firebase/firestore'



const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState([])
    const [loading, setLoading] = useState(false)

    const {itemId} = useParams()

 

    useEffect(() => {
      setLoading(true)
        const docRef = doc(db,"stock",itemId)
      getDoc(docRef)
      .then( doc => {
        setProductDetail({id: doc.id,...doc.data()})
        console.log(doc);
      })
      .finally(() => { 
        setLoading(false)
    })

    },[itemId] )

  return (
    <Container>
      
        
        loading ? <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>     
        </Spinner> : <ItemDetail { ...productDetail}/>
        
      
    </Container>
  )
}

export default ItemDetailContainer
