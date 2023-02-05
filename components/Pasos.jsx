import { useRouter } from "next/router"

const pasos = [
    {paso:1,nombre:'Menu',url:'/'},
    {paso:2,nombre:'Resumen',url:'/resumen'},
    {paso:3,nombre:'Datos y Total',url:'/total'}
]

export default function Pasos() {

    const router = useRouter()
    
    const calcularProgreso = () => {

        let progreso
        switch (router.pathname) {
            case  '/':
                progreso = 2
                break;
            case  '/resumen':
                progreso = 45
                break;
            case  '/total':
                progreso = 100
                break;
            default:
                break;
        }
        return progreso
    }

  return (
    <>
      <div className="flex justify-between mb-10">
        {pasos?.map(paso => (
            <button
            onClick={() => {
                router.push(paso.url)
            }}
            className="text-2xl font-bold"
            key={paso.paso}
            >
                {paso.nombre}
            </button>
        ))}
      </div>
      <div className=" bg-gray-200 mb-10">
        <div className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white" 
        style={{width: `${calcularProgreso()}%`}}
        ></div>
      </div>
    </>
  )
}
