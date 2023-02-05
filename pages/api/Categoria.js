import { PrismaClient } from "@prisma/client"

export default async function categoria(req, res) {

  const prisma = new PrismaClient()
  const categoria = await prisma.categoria.findMany({
    include:{ //se trae los datos que estan relacionados
      productos: true
    }
  })

  res.status(200).json(categoria)
}
