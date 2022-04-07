import React, {useEffect, useState } from 'react'
import { getProduct } from '../Mocks/fakeApi'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
    getProduct
    .then((resp) => setProductDetail(resp.filter((item) => item.id === '03')))
    .catch((error) => console.log(error))
    .finally(() => setLoading(false))
    },[] )

    console.log(productDetail);

  return (
    <div>
        {loading ? <p>Loading</p> : <ItemDetail productDetail = {productDetail}/>}
    </div>
  )
}

export default ItemDetailContainer
