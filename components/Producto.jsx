import Image from "next/image"
import { FormatearD } from "@/helpers"
import useQuiosco from "@/Hooks/useQuiosco"

export default function Producto({producto}) {

    const {nombre,precio,imagen} = producto
    const {handleSetProducto, handleChangeM } = useQuiosco()

  return (
      <>
          <div className="p-3 cursor-pointer border rounded-md">
              <Image src={`/assets/img/${imagen}.jpg`} width={250} height={100} alt={`imagen`} />

              <div className="pt-3 text-center ">
                  <h3 className="text-xl font-bold">{nombre}</h3>
                  <p className="mt-2 font-black text-xl text-amber-400">{FormatearD(precio)}</p>

                  <button
                  className="p-3 uppercase bg-indigo-600 hover:bg-indigo-800 w-full mt-3 rounded-md font-bold text-white"
                  type="button"
                  onClick={()=> {
                    handleSetProducto(producto)
                    handleChangeM()
                  }}
                  >
                    Agregar
                  </button>
              </div>
          </div>

      </>
    
  )
}
