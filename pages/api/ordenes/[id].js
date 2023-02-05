import { PrismaClient } from "@prisma/client";


export default async function handler(req, res) {
    const prisma = new PrismaClient()

    if(req.method == 'POST'){

        const {id} = req.query //permite obtener el valor de la peticion que esta mos realizando
        
        const OrdenActualizado = await prisma.orden.update({
            where:{
                id: parseInt(id) // query devuelve string
            },
            data:{
                estado: true
            }
        })
        res.status(200).json(OrdenActualizado)
    }
    
}