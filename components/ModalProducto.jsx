import Image from "next/image"
import useQuiosco from "@/Hooks/useQuiosco"
import { FormatearD } from '@/helpers/index'
import { useState, useEffect } from "react"


export default function ModalProducto() {

  const { prod, handleChangeM,handlPedido, pedido } = useQuiosco()

  const [cantidad, setCantidad] = useState(1)
  const [edicion, setEdicion] = useState(false)

  //comprobar si el modal esta en el pedido
  useEffect(() => {
    if(pedido.some((productoState) => productoState.id === prod.id)) {

      const productoEdicion = pedido.find((productoState) => productoState.id === prod.id)

      setEdicion(true)  
      setCantidad(productoEdicion.cantidad)
    }
  },[pedido, prod])

  return (
    <div className="md:flex gap-5">
      <div className="md:w-1/3">
        <Image
          width={400}
          height={400}
          src={`/assets/img/${prod.imagen}.jpg`}
          alt={`imagen ${prod.imagen}`}
        />
      </div>
      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button className="hover:text-amber-400" onClick={() => handleChangeM()}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>

        <h3 className="text-3xl font-bold mt-2 text-center">{prod.nombre}</h3>
        <p className="mt-3 font-black text-4xl text-amber-400">{FormatearD(prod.precio)}</p>

        <div className="flex gap-4 mt-4 justify-center">

          <button
            type="button"
            onClick={() => {
              if (cantidad <= 1) return;
              setCantidad(cantidad - 1)
            }}
            className={'text-amber-400 '}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

          </button>

          <p className="w-10 h-10 bg-amber-400 text-2xl rounded-full text-center text-white">{cantidad}</p>

          <button
            type="button"
            onClick={() => {
              if (cantidad >= 5) return;
              setCantidad(cantidad + 1)
            }}
            className={'text-amber-400 font-bold'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

          </button>

        </div>
        <div className="flex justify-center">
          <button 
            className="py-3 px-2 bg-indigo-600 hover:bg-indigo-800 text-white uppercase font-bold  rounded-md mt-5"
            onClick={() => handlPedido({...prod,cantidad})} //enviando un obj al state de pedido creando una copia de prod y agregando la propiedad cantidad
          >
            {edicion ? 'Guardar Edicion' : 'Guardar Pedido'}
          </button>
        </div>
      </div>
    </div>
  )
}
