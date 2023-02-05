import Layout from "@/layout/Layout"
import { useCallback, useEffect } from "react";
import useQuiosco from "@/Hooks/useQuiosco"
import { FormatearD } from "@/helpers";

export default function Total() {

  const {pedido,setNombre,nombre,handleSubmit,total} = useQuiosco();

  const ConfirmarPedido = useCallback(() => { //confirmando si hay productos en el pedido
    return pedido.length === 0 || nombre === ''
  },[pedido,nombre])
  
  useEffect(() =>{ //llamando a la funcion y modificando si pedi y confirmacion cambian
    ConfirmarPedido()
  }, [pedido, ConfirmarPedido])

  
  return (
    <Layout pagina={'Resumen'}>
    <div className="text-center">
      <h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
      <p className="text-2xl my-6">Confirma tu Pedido acontinuacion</p>
    </div>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre" className="block uppercase text-slate-800 font-bold text-xl">Nombre</label>
        <input id="nombre" type="text" onChange={e => setNombre(e.target.value)} value={nombre} className="bg-gray-200 w-full lg:w-1/3 p-2 rounded-md mt-2 " />
      </div>
      <div className="mt-5">
        <p className="text-xl">Total a Apagar: {''} <span className="font-bold">{FormatearD(total)}</span></p>
      </div>
      <div>
        <input
         type="submit" 
          value={'confirmar Pedido'}
         className={`${ConfirmarPedido() ? 'bg-indigo-200': 'bg-indigo-600 hover:bg-indigo-800'} py-3 px-2 mt-3 lg:w-auto w-full rounded-md font-bold text-white text-center`}
         disabled={ConfirmarPedido()}
         />
      </div>
    </form>
  </Layout>
  )
}
