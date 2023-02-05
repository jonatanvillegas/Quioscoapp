const {categorias} = require('./data/Categorias')
const {productos} = require('./data/Productos')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const main = async ()  => {
    try {
        await prisma.categoria.createMany({
            data : categorias
        })
        await prisma.producto.createMany({
            data : productos
        })
    } catch (error) {
        console.log(error)
    }
}
main()