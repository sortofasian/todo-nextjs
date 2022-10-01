import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

import { Todo } from '../../../types/api'

interface TodoRequest extends NextApiRequest {
    body: Partial<Omit<Todo, 'id'>>
}

const prisma = new PrismaClient()

export default async function handler(req: TodoRequest, res: NextApiResponse) {
    const { id } = req.query

    if (!id || Array.isArray(id)) {
        res.status(400).end()
        return
    }

    switch (req.method) {
        case 'PUT': {
            if (!req.body) {
                res.status(400).end()
                return
            }

            await prisma.todo.update({ where: { id: id }, data: req.body })
            res.status(200).end()
            break
        }

        case 'DELETE': {
            await prisma.todo.delete({ where: { id: id } })
            res.status(200).end()
            break
        }

        default: {
            res.status(405).end()
        }
    }
    prisma.$disconnect()
}
