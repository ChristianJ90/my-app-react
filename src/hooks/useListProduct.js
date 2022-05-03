import { useEffect, useState } from 'react';
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import db from "../firebase/config";

const useListProduct = (categoryId = null) => {

    const [listaProductos, setListaProductos] = useState([])
    const [cargando, setCargando] = useState(false);

    useEffect(() =>{
        setCargando(true)
    
    //1.- Armar la referencia
        const stockRef = collection(db,"stock")
        const q = categoryId ? query(stockRef, where('categoria','==', categoryId), orderBy("nombre")):query(stockRef, orderBy("nombre")) 
    //2.- Llamar (async) a esa referencia
        getDocs(q)
        .then(resp => {
            const items = resp.docs.map((doc) => ({id: doc.id,...doc.data()}))
            console.log(items)
            setListaProductos(items)
        })
        .finally(() => { 
            setCargando(false)
        })
    },[categoryId])

  return ({
      listaProductos, cargando
  }
    
  )
}

export default useListProduct