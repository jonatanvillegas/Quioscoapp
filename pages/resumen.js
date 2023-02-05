import Layout from "@/layout/Layout"
import useQuiosco from "@/Hooks/useQuiosco"
import ResumenProducto from "@/components/ResumenProducto"

export default function Resumen() {

  const {pedido} = useQuiosco()

  return (
    <Layout pagina={'Resumen'}>
      <div className="text-center">
        <h1 className="text-4xl font-black">Resumen</h1>
        <p className="text-2xl my-6">Revisa tu pedido</p>
      </div>

      {pedido === 0 ? ('No ha seleccionado un producto'):(pedido?.map(producto => (
          <ResumenProducto 
            key={producto.id}
            producto={producto} 
          />
        ))
      )}
    </Layout>

    
  )
}
