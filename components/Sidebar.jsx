import Categoria from "./Categoria"
import useQuiosco from "@/Hooks/useQuiosco"
import Image from "next/image"

export default function Sidebar() {

    const {categorias} = useQuiosco()
  return (
    <>
      <Image width={150} height={100} src='/assets/img/logo.svg' alt="imagen logo" className="px-3 m-auto mt-3" />

      <nav className="mt-10">
            {categorias?.map(categoria => (
                <Categoria
                    key={categoria.id}
                    categoria={categoria}
                />
            ))}
      </nav>
    </>
  )
}
