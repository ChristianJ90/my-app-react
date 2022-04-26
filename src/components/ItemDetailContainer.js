import React, {useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import {db} from '../firebase/config'
import { doc, getDoc } from 'firebase/firestore'



const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

 

    useEffect(() => {
      setLoading(true)
        const docRef = doc(db,"Mi Stock",itemId)
      getDoc(docRef)
      .then( doc => {
        const prod = {id: doc.id,...doc.data()}
        setProductDetail(prod)
        console.log(prod);
      })
      .finally(() => { 
        setLoading(false)
    })

    },[itemId] )

  return (
    <div>
        {
        loading ? <div><Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>     
        </Spinner></div> : <ItemDetail productDetail={productDetail}/>
        }
       
    </div>
  )
}

export default ItemDetailContainer
