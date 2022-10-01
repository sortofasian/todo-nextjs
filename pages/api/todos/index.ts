import { PrismaClient } from '@prisma/client'
import { nanoid } from 'nanoid'
import type { NextApiRequest, NextApiResponse } from 'next'

import { Todo } from '../../../types/api'

interface TodoRequest extends NextApiRequest {
    body: Partial<Todo> & Omit<Todo, 'complete' | 'id'>
}

export default async function handler(req: TodoRequest, res: NextApiResponse<Todo[]>) {
    const prisma = new PrismaClient()

    switch (req.method) {
        case 'GET': {
            const todos = await prisma.todo.findMany()
            res.status(200).json(todos)
            break
        }

        case 'POST': {
            await prisma.todo.create({
                data: { name: req.body.name, description: req.body.description, id: nanoid() }
            })
            res.status(201).end()
        }

        default: {
            res.status(405).end()
        }
    }
    await prisma.$disconnect()
}
