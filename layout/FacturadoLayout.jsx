import Head from "next/head";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormatearD } from "@/helpers";
import useQuiosco from "@/Hooks/useQuiosco";

export default function AdminLayout({ children, pagina }) {

    const {facturado}= useQuiosco()

  return (
    <>
      <Head>
        <title>Café - {pagina}</title>
        <meta name="description" content="Quosco Cafetería" />
      </Head>

      <div className="md:flex">
            <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 py-5">
                <Image
                    width={300} height={200}
                    src="/assets/img/logo.svg"
                    alt="imagen logotipo"
                    className="px-3 m-auto mt-3"
                />
                <div className="m-5 w-80% bg-gray-100">
                    <p className="font-bold text-center">Facturado: <span className="text-amber-400">{facturado && FormatearD(facturado)}</span></p>
                </div>
            </aside>

            <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                <div className="p-10">
                    {children}
                </div>
            </main>
      </div>
      <ToastContainer />
    </>
  );
}