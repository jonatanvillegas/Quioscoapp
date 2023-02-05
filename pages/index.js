import Layout from "@/layout/Layout"
import Producto from "@/components/Producto"
import useQuiosco from "@/Hooks/useQuiosco"

export default function Home() {

  const {categoriaActual} = useQuiosco()

  return (
    <>
      <Layout pagina={`Menu ${categoriaActual?.nombre}`} >
        <div className="text-center">
          <h1 className="text-5xl font-black ">{categoriaActual?.nombre}</h1>
          <p className="text-3xl my-6">
            Elige y personaliza tu pedido a continuacion
          </p>
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3">
          {categoriaActual?.productos?.map(producto => (
            <Producto
              key={producto.id}
              producto={producto}
            />
          ))}
        </div>
      </Layout>
    </>
      
  )
}
