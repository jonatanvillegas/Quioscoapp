import { PrismaClient } from "@prisma/client"

export default async function producto(req, res) {

  const prisma = new PrismaClient()
  const producto = await prisma.producto.findMany({
    where: {
      categoriaId : 1    
    },
  });

  res.status(200).json(producto)
}
