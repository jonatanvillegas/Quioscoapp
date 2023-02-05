import { createContext } from "react";
import { useState,useEffect } from "react";
import {toast } from 'react-toastify';
import axios from "axios";
import { useRouter } from "next/router";
import swal from "sweetalert";

const QuioscoContext = createContext()

const QuioscoProvider = ({ children }) => {

    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [prod ,setProducto]= useState({})
    const [modal, setModal]=useState(false)
    const [pedido, setPedido] = useState([])
    const [nombre, setNombre] = useState('')
    const [total, setTotal] = useState(0)
    const [facturado, setFacturado]= useState(0)
    
    const router = useRouter()

    useEffect(()=>{
        const ObtenerCategorias = async () => {
          const {data} = await axios('/api/Categoria')
          setCategorias(data)
        }
        ObtenerCategorias()
    },[])

    useEffect(()=>{
        setCategoriaActual(categorias[0])
    },[categorias])

    useEffect(() =>{
      const nuevoTotal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad) + total, 0)

      setTotal(nuevoTotal)
    },[pedido])
 
    const handleCategoriaA = (id) => {
      const categoria = categorias.filter(cat => cat.id === id)
      setCategoriaActual(categoria[0])
      router.push('/')
    }
    const handleChangeM = () => {
      setModal(!modal)
    }
    const handleSetProducto = (prod) => {
      setProducto(prod)
    }
  const handlPedido = ({ categoriaId, ...producto }) => { //sacando id y la imagen y obteniendo una copia del objeto que se esta pasando 

    if (pedido.some(productoState => productoState.id === producto.id)) { //some devuelve true o false si se cumple la condicion
      //Actualizar la cantidad de producto
      const PedidoActualizado = pedido.map(productoState =>
        productoState.id === producto.id ? producto : productoState)
      setPedido(PedidoActualizado)
      toast.success('Guardado Correctamente')
    } else {
      setPedido([...pedido, producto])
      toast.success('Agregado al pedido')
    }

    handleChangeM()
  }
    const handleChangeEditar = (id) => {
      const pedidoActualizado = pedido.filter(producto => producto.id === id)

      setProducto(pedidoActualizado[0])
      setModal(!modal)
    }
    const handleEliminarProducto = (id) => {
      const pedidoActualizado = pedido.filter(producto => producto.id !== id)
      toast.success('Eliminado Correctamente')
      setPedido(pedidoActualizado)
    }
    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        await axios.post('/api/ordenes', {pedido, nombre, total, fecha: Date.now().toString()})

        //resetear app
        setCategoriaActual(categorias[0])
        setPedido([])
        setNombre('')
        setTotal(0)

        swal({
          title: "Gracias por Preferirnos",
          text: "Pedido creado con Exito",
          icon: "success",
        })
        
        setTimeout(() =>{
          router.push('/')
        },1000)

      } catch (error) {
        console.log(error)
      }
    }
    
    const calcularFacturado = (data) => {
      const reduce = data?.reduce((acumulador, actual) => acumulador + actual.total, 0) 
      setFacturado(reduce)
    }
    
    
    return (

        <QuioscoContext.Provider
            value={{
                categorias,
                handleCategoriaA,
                categoriaActual,
                handleChangeM,
                handleSetProducto,
                modal,
                prod,
                handlPedido,
                pedido,
                handleChangeEditar,
                handleEliminarProducto,
                setNombre,
                nombre,
                handleSubmit,
                total,
                calcularFacturado,
                facturado
            }}
        >
            {children}
        </QuioscoContext.Provider>
    )
}

export{
    QuioscoProvider
}
export default QuioscoContext