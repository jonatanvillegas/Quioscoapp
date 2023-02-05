import AdminLayout from "@/layout/AdminLayuot"
import axios from "axios"
import useSWR from 'swr'
import Orden from "@/components/Orden"

export default function Admin() {

  const fetcher = () => axios('/api/ordenes').then(datos => datos.data)
  const { data, error, isLoading } = useSWR('/api/ordenes', fetcher, {refreshInterval: 100})


  return (
    
    <AdminLayout pagina={'Administracion'}>
      <h1 className="text-2xl text-center font-bold">Panel de Administracion</h1>
      <p className="text-xl my-8 text-center">Administra tus Ordenes</p>

      {data && data.length ? data.map(orden => (
        <Orden
        key={orden.id}
        orden={orden}
        />
      )) : <p>No hay Ordenes pendiente</p> }
    </AdminLayout>
  )
}
