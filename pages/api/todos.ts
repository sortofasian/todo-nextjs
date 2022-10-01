import type { NextApiRequest, NextApiResponse } from 'next'

import { GetTodos } from '../../types/api'

export default function handler(req: NextApiRequest, res: NextApiResponse<GetTodos>) {
    const todos = { todos: [{ name: 'Stop Procrastinating', complete: false }] }

    setTimeout(() => res.status(200).json(todos), 400)
}
