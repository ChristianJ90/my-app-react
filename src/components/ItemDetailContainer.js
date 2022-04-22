import React, {useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import {db} from '../firebase/config'


const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})
    const [loading, setLoading] = useState(false)

    const {itemId} = useParams()

    useEffect(() => {
      setLoading(true)

      const docRef = doc(db,"Mi Stock", itemId)
      getDoc(docRef)
      .then(doc => {
        setProductDetail({id: doc.id,...doc.data()})
      })
      .finally(() => { 
        setLoading(false)
    })

    },[itemId] )

  return (
    <div>
        {loading ? <div><Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>     
        </Spinner></div> : <ItemDetail productDetail={productDetail}/>}
       
    </div>
  )
}

export default ItemDetailContainer
