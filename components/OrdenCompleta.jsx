import { FormatearD } from "@/helpers"
import Image from "next/image"


export default function OrdenCompleta({orden}) {
    const {id, pedido} = orden
    
    
  return (

      <>
          {pedido?.map(platillo => (
              <div key={platillo.id} className="p-3 cursor-pointer border rounded-md">
                  <Image src={`/assets/img/${platillo.imagen}.jpg`} width={250} height={100} alt={`imagen`} />

                  <div className="pt-3 text-center ">
                      <h3 className="text-xl font-bold text-center">orden: <span className='text-amber-400'>{orden.id}</span></h3>
                      <h3 className="text-xl font-bold">{platillo.nombre}</h3>
                      <p className="text-sm  font-bold">Cantidad: {platillo.cantidad}</p>
                      <p className="text-sm  font-bold text-center ">Cliente: {orden.nombre}</p>
                      <p>{FormatearD(orden.total)}</p>
                  </div>
              </div>
          ))}

      </>
  )
}
