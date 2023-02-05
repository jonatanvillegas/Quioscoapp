import FacturadoLayout from '@/layout/FacturadoLayout'
import axios from "axios"
import useSWR from 'swr'
import OrdenCompleta from "@/components/OrdenCompleta";
import useQuiosco from "@/Hooks/useQuiosco";

export default function OrdenesC() {

    const { calcularFacturado } = useQuiosco()

    const fetcher = () => axios('/api/ordenesC').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/ordenesC', fetcher);

    calcularFacturado(data)
   
  return (
    <FacturadoLayout pagina={'Ordenes Realizada'}>
      <h1 className="text-2xl text-center font-bold">Ordenes Completadas</h1>
      <p className="text-xl my-8 text-center">Administra tus Ordenes</p>

      <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3">
          {data && data.length ?
              data?.map(orden => (
                  <OrdenCompleta
                      key={orden.id}
                      orden={orden}
                      
                  />
              ))
              : <p className="text-4xl text-center text-amber-700 font-bold uppercase ">No hay Ordenes pendiente</p>}
        </div>
    </FacturadoLayout>
  )
}
