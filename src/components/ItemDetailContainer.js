import React, {useEffect, useState } from 'react'
import { getProducts } from '../mocks/fakeApi'
import ItemDetail from './ItemDetail'
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})
    const [loading, setLoading] = useState(false)

    const {item} = useParams()

    useEffect(() => {
      setLoading(true)
    getProducts
    .then((resp) => setProductDetail(resp.find((products) => products.id === item)))
    .catch((error) => console.log(error))
    .finally(() => setLoading(false))
    },[] )

    console.log(productDetail);

  return (
    <div>
        {loading ? <div><Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner></div> : <ItemDetail productDetail={productDetail}/>}
    </div>
  )
}

export default ItemDetailContainer
