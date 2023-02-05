import Image from "next/image"
import { FormatearD } from "@/helpers"
import axios from "axios"
import swal from "sweetalert"


export default function Orden({orden}) {

    const {id, pedido} = orden

    const completarOrden = async () => {
        try {
            await axios.post(`/api/ordenes/${id}`)
            swal({
                title: "Orden Lista",
                icon: "success",
            })
        } catch (error) {
            
        }
    }
    

  return (
    <div className='border p-10 space-y-5 mb-4'>
      <h3 className="text-xl font-bold text-center">orden: <span className='text-amber-400'>{orden.id}</span></h3>
      <p className="text-sm  font-bold">Cliente: {orden.nombre}</p>

      <div>
            {pedido?.map(platillo =>(
                <div key={orden.id} className="py-3 flex border-b last-of-type:border-0 items-center">
                    <div className="w-32">
                        <Image
                            src={`/assets/img/${platillo.imagen}.jpg`}
                            width={300}
                            height={200}
                            alt={`imagen orden ${orden.id}`}
                        />
                    </div>
                    <div className="p-5 space-y-2">
                        <h3 className="text-xl font-bold text-amber-400">{platillo.nombre} </h3>
                        <p className="text-sm  font-bold">Cantidad: {platillo.cantidad}</p>
                    </div>  
                </div>
            ))}
      </div>
      <div className="md:flex md:items-center md:justify-between my-10">
        <p className="mt-5 font-black text-3xl text-amber-400">
             Total a Pagar:   {FormatearD(orden.total)}
        </p>
        <button className="py-3 px-2 bg-green-400 hover:bg-green-600 text-white rounded-md font-bold mt-5 md:mt-0
        text-sm"
        type="button"
        onClick={completarOrden}
        >
            Completar Orden
        </button>
      </div>
    </div>
  )
}
