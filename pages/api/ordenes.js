import { PrismaClient } from "@prisma/client";


export default async function handler(req, res) {

    const prisma = new PrismaClient()

    //consultando las ordenes de la base de datos que no estan completadas
    const ordenes = await prisma.orden.findMany({
        where:{
            estado: false
        }
    })
    res.status(200).json(ordenes);
    //res status 200 significa que la peticion es correcta
    
    //creando ordenes en la base de datos
    if (req.method === 'POST') {
        const orden = await prisma.orden.create({
            data: {
                nombre: req.body.nombre,
                fecha: req.body.fecha,
                total: req.body.total,
                pedido: req.body.pedido
            }
        })

        res.json(orden);
    }
}   


//metodo GET muestra los datos en la base de datos
//metoso POST ingresa un nuevo registro en la base de datos