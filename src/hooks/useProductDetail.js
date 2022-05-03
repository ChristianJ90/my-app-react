import { useEffect,useState } from "react"
import db from '../firebase/config'
import { doc, getDoc } from 'firebase/firestore'

const useProductDetail = (itemId = null) => {
    const [productDetail, setProductDetail] = useState([])
    const [loading, setLoading] = useState(false)

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
  return ({
      productDetail,loading
  })
}

export default useProductDetail