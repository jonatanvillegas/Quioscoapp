import Image from "next/image"
import useQuiosco from "@/Hooks/useQuiosco"

export default function Categoria({categoria}) {

    const {nombre, icono, id} = categoria
    const {handleCategoriaA, categoriaActual} = useQuiosco()

  return (
    <div className={`${categoriaActual?.id === id ? "bg-amber-400" : ''} flex gap-2  items-center w-full border hover:bg-amber-400 px-3`} >
      <Image width={60} height={60} src={`/assets/img/icono_${icono}.svg`} alt={`imagen ${nombre}`} className="my-5 " />

      <button className="font-bold text-2xl hover:cursor-pointer"
        onClick={() => handleCategoriaA(id)}
      >
        {nombre}
      </button>

    </div>
  )
}
