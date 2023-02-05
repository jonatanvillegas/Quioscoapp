import { PrismaClient } from "@prisma/client";

export default async function handler(req,res){

    const prisma = new PrismaClient()
    //consultando las ordenes de la base de datos que estan completadas
    const ordenesC = await prisma.orden.findMany({
        where:{
            estado: true
        }
    })
    res.status(200).json(ordenesC);
}